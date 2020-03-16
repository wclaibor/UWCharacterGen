import { Component, OnDestroy } from '@angular/core'
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms'
import { Subject } from 'rxjs'
import { takeUntil, tap } from 'rxjs/operators'
import { CharacterService } from '../character.service'
import {
  AttributeValue,
  Character,
  CharacterAttributes,
} from '../models/character'

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss'],
})
export class AttributesComponent implements OnDestroy {
  private availableAttributeValues: AttributeValue[] = [-1, 0, 1, 1, 2]
  attributeValues: AttributeValue[] = [...this.availableAttributeValues]

  character: Character

  formGroup: FormGroup

  controls: { name: string; control: AbstractControl }[]

  private destroySubject = new Subject<null>()

  constructor(private readonly characterService: CharacterService) {
    this.character = this.characterService.getCharacter()

    this.formGroup = new FormGroup({
      mettle: new FormControl(
        this.character.characterAttributes.mettle,
        Validators.required,
      ),
      physique: new FormControl(
        this.character.characterAttributes.physique,
        Validators.required,
      ),
      influence: new FormControl(
        this.character.characterAttributes.influence,
        Validators.required,
      ),
      expertise: new FormControl(
        this.character.characterAttributes.expertise,
        Validators.required,
      ),
      interface: new FormControl(
        this.character.characterAttributes.interface,
        Validators.required,
      ),
    })

    this.controls = Object.entries(this.formGroup.controls).map(entry => ({
      name: entry[0],
      control: entry[1],
    }))

    this.formGroup.valueChanges
      .pipe(
        takeUntil(this.destroySubject),
        // Update available attribute values
        tap((value: CharacterAttributes) => {
          this.updateAvailableAttributeValues(value)
        }),
        // Update character
        tap((value: CharacterAttributes) => {
          this.character.characterAttributes = value
          this.characterService.updateCharacter(this.character)
        }),
      )
      .subscribe()

    this.updateAvailableAttributeValues(this.character.characterAttributes)
  }

  updateAvailableAttributeValues(characterAttributes: CharacterAttributes) {
    const takenValues: AttributeValue[] = Object.values(
      characterAttributes,
    ).filter(value => value != null)
    const tempAttributeValues = [...this.availableAttributeValues]
    for (const attributeValue of takenValues) {
      const toRemove = tempAttributeValues.findIndex(
        arrayValue => arrayValue === attributeValue,
      )
      tempAttributeValues.splice(toRemove, 1)
    }
    this.attributeValues = tempAttributeValues
  }

  ngOnDestroy() {
    this.destroySubject.next()
    this.destroySubject.complete()
  }
}
