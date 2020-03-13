import { Component, Input, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { CharacterSheetService } from '../character-sheet.service'
import { Background, Backgrounds } from '../models/backgrounds'
import { Career, Careers } from '../models/careers'

@Component({
  selector: 'app-class-selector',
  templateUrl: './class-selector.component.html',
  styleUrls: ['./class-selector.component.scss'],
})
export class ClassSelectorComponent implements OnInit {
  @Input() formGroup?: FormGroup

  constructor(private readonly characterSheetService: CharacterSheetService) {}

  ngOnInit() {}

  backgrounds: Background[] = Backgrounds
  careers: Career[] = Careers

  generateCharacter() {
    this.characterSheetService.generateCharacter(this.formGroup.value)
  }
}
