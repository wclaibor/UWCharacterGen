import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core'
import domtoimage from 'dom-to-image'
import * as _ from 'lodash-es'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'
import { CharacterService } from '../character.service'
import { IconService } from '../icon.service'
import { Character } from '../models/character'
import { IconGenerator } from './iconGenerator.interface'

@Component({
  selector: 'uw-icon-generator',
  templateUrl: './icon-generator.component.html',
  styleUrls: ['./icon-generator.component.scss'],
})
export class IconGeneratorComponent implements IconGenerator, OnInit {
  @ViewChild('characterIcon', { read: ElementRef })
  private readonly characterIconRef: ElementRef<HTMLElement>

  @Input() cardTitle = false

  @HostBinding('class.card-title') get isCardTitle() {
    return this.cardTitle
  }

  character: Observable<Character>

  career1Icon: string | null
  career2Icon: string | null
  originIcon: string | null

  constructor(
    private readonly iconService: IconService,
    private readonly characterService: CharacterService,
  ) {
    this.character = this.characterService.character

    this.character
      .pipe(tap(value => this.updateCharacterIcon(value)))
      .subscribe()
  }

  ngOnInit() {
    if (!this.cardTitle) {
      this.iconService.registerGenerator(this)
    }
  }

  updateCharacterIcon(character: Character) {
    if (character.characterInfo.career1 != null) {
      this.career1Icon = `${_.lowerCase(character.characterInfo.career1)}.png`
    } else {
      this.career1Icon = null
    }
    if (character.characterInfo.career2 != null) {
      this.career2Icon = `${_.lowerCase(character.characterInfo.career2)}.png`
    } else {
      this.career2Icon = null
    }
    if (character.characterInfo.origin != null) {
      this.originIcon = `${_.lowerCase(character.characterInfo.origin)}.png`
    } else {
      this.originIcon = null
    }
  }

  getIconImage = () => {
    return domtoimage.toPng(this.characterIconRef.nativeElement, {
      bgcolor: 'transparent',
    })
  }
}
