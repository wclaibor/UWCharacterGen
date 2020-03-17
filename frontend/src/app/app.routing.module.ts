import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ExtraOptions, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'characterInfo',
  },
  {
    path: 'attributes',
    loadChildren: () =>
      import('./attributes/attributes.module').then(
        mod => mod.AttributesModule,
      ),
  },
  {
    path: 'characterInfo',
    loadChildren: () =>
      import('./character-info/character-info.module').then(
        mod => mod.CharacterInfoModule,
      ),
  },
  {
    path: 'moves',
    loadChildren: () =>
      import('./moves/moves.module').then(mod => mod.MovesModule),
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
export class AppRoutingModule {}
