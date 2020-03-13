import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ExtraOptions, RouterModule, Routes } from '@angular/router'
import { AttributesComponent } from './attributes/attributes.component'
import { CharacterInfoComponent } from './character-info/character-info.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'characterInfo',
  },
  {
    path: 'characterInfo',
    component: CharacterInfoComponent,
  },
  {
    path: 'attributes',
    component: AttributesComponent,
  },
]

const routerOptions: ExtraOptions = {
  enableTracing: false,
}

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRouterModule {}
