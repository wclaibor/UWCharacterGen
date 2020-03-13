import { Component } from '@angular/core'
import { AttributeValue } from '../models/character'

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss'],
})
export class AttributesComponent {
  attributeValues: AttributeValue[] = [-1, 0, 1, 1, 2]
}
