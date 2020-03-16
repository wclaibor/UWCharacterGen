import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { RouterModule, Routes } from '@angular/router'
import { CharacterInfoComponent } from './character-info.component'

const routes: Routes = [
  {
    path: '',
    component: CharacterInfoComponent,
  },
]

@NgModule({
  declarations: [CharacterInfoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    RouterModule.forChild(routes),
  ],
})
export class CharacterInfoModule {}
