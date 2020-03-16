import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import FileSaver from 'file-saver'
import { tap } from 'rxjs/operators'
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
      const character = this.characterService.getCharacter()
      this.http
        .post(
          'http://localhost:3000/createCharacter',
          {
            character: character,
            icon: icon,
          },
          { responseType: 'blob' },
        )
        .pipe(
          tap(data => {
            FileSaver.saveAs(data, `${character.characterInfo.name}-sheet.pdf`)
          }),
        )
        .subscribe()
    })
  }
}
