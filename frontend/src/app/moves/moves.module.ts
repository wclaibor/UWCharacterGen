import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { RouterModule, Routes } from '@angular/router'
import { IconGeneratorModule } from '../icon-generator/icon-generator.module'
import { MovesComponent } from './moves.component'

const routes: Routes = [
  {
    path: '',
    component: MovesComponent,
  },
]

@NgModule({
  declarations: [MovesComponent],
  imports: [
    CommonModule,
    MatCardModule,
    IconGeneratorModule,
    RouterModule.forChild(routes),
  ],
})
export class MovesModule {}
