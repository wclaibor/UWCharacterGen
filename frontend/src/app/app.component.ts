import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'uncharted-worlds-icon-generator'

  formGroup = new FormGroup({
    archetype: new FormControl('', Validators.required),
    characterName: new FormControl('', Validators.required),
    background: new FormControl('Advanced', Validators.required),
    career1: new FormControl('Military', Validators.required),
    career2: new FormControl('Fanatic', Validators.required),
  })
}
