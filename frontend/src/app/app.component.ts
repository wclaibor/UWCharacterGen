import { Component } from '@angular/core'
import { CharacterService } from './character.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'uncharted-worlds-icon-generator'

  character = this.characterService.character

  constructor(private readonly characterService: CharacterService) {}
}
