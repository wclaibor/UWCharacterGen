import { Component } from '@angular/core'
import { CharacterSheetService } from '../character-sheet.service'

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
})
export class NavHeaderComponent {
  constructor(private readonly characterSheetService: CharacterSheetService) {}

  createCharacterSheet() {
    this.characterSheetService.generateCharacter()
  }
}
