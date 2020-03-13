import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Character, ShipModule } from './models/character'

const emptyShipModule: ShipModule = {
  moves: [],
  workspaces: [],
}

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private _character: Character = {
    characterInfo: {
      name: null,
      archetype: null,
      origin: null,
      career1: null,
      career2: null,
    },
    characterAttributes: {
      mettle: null,
      expertise: null,
      influence: null,
      interface: null,
      physique: null,
    },
    crewHeadquarters: {
      type: null,
      cargoBay: emptyShipModule,
      engineering: emptyShipModule,
      helm: emptyShipModule,
      quarters: emptyShipModule,
    },
    debts: [],
    skills: [],
  }

  private readonly characterSubject: BehaviorSubject<
    Character
  > = new BehaviorSubject(this._character)

  character = this.characterSubject.asObservable()

  getCharacter() {
    return this._character
  }

  updateCharacter(character: Character) {
    this._character = { ...character }
    this.characterSubject.next(this._character)
  }
}
