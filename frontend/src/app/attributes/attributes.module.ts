import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { RouterModule, Routes } from '@angular/router'
import { IconGeneratorModule } from '../icon-generator/icon-generator.module'
import { AttributesComponent } from './attributes.component'

const routes: Routes = [
  {
    path: '',
    component: AttributesComponent,
  },
]

@NgModule({
  declarations: [AttributesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    IconGeneratorModule,
    RouterModule.forChild(routes),
  ],
})
export class AttributesModule {}
