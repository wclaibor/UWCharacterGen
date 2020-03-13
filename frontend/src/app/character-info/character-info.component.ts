import { Component, OnDestroy } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Subject } from 'rxjs'
import { tap } from 'rxjs/operators'
import { CharacterSheetService } from '../character-sheet.service'
import { CharacterService } from '../character.service'
import { Career, Careers } from '../models/careers'
import { Character } from '../models/character'
import { Origin, Origins } from '../models/origins'

@Component({
  selector: 'uw-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss'],
})
export class CharacterInfoComponent implements OnDestroy {
  private character: Character

  formGroup: FormGroup

  private readonly destroySubject = new Subject<null>()

  constructor(
    private readonly characterService: CharacterService,
    private readonly characterSheetService: CharacterSheetService,
  ) {
    this.character = this.characterService.getCharacter()

    this.formGroup = new FormGroup({
      name: new FormControl(
        this.character.characterInfo.name,
        Validators.required,
      ),
      archetype: new FormControl(
        this.character.characterInfo.archetype,
        Validators.required,
      ),
      origin: new FormControl(this.character.characterInfo.origin),
      career1: new FormControl(
        this.character.characterInfo.career1,
        Validators.required,
      ),
      career2: new FormControl(
        this.character.characterInfo.career2,
        Validators.required,
      ),
    })

    this.formGroup.valueChanges
      .pipe(
        tap(value => {
          this.character.characterInfo = value
          this.characterService.updateCharacter(this.character)
        }),
      )
      .subscribe()
  }

  backgrounds: Origin[] = Origins
  careers: Career[] = Careers

  ngOnDestroy() {
    this.destroySubject.next()
    this.destroySubject.complete()
  }

  generateCharacter() {
    this.characterSheetService.generateCharacter(this.formGroup.value)
  }
}
