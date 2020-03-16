import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { CharacterService } from './character.service'
import { IconService } from './icon.service'

@Injectable({
  providedIn: 'root',
})
export class CharacterSheetService {
  constructor(
    private readonly iconService: IconService,
    private readonly characterService: CharacterService,
    private readonly http: HttpClient,
  ) {}

  generateCharacter() {
    this.iconService.getIcon().then((icon: string) => {
      this.http
        .post('http://localhost:3000/createCharacter', {
          character: this.characterService.getCharacter(),
          icon: icon,
        })
        .subscribe()
    })
  }
}
