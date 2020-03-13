import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { IconService } from './icon.service'
import { Character } from './models/character'

@Injectable({
  providedIn: 'root',
})
export class CharacterSheetService {
  constructor(
    private readonly iconService: IconService,
    private readonly http: HttpClient,
  ) {}

  generateCharacter(value: Character) {
    this.iconService.getIcon().then((icon: string) => {
      this.http
        .post('http://localhost:3000/createCharacter', {
          character: value,
          icon: icon,
        })
        .subscribe()
    })
  }
}
