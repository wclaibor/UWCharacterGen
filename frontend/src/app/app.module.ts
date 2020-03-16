import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ExtraOptions, RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component'
import { AttributesComponent } from './attributes/attributes.component'
import { CharacterInfoComponent } from './character-info/character-info.component'
import { IconGeneratorComponent } from './icon-generator/icon-generator.component'
import { MovesComponent } from './moves/moves.component'
import { NavHeaderComponent } from './nav-header/nav-header.component'

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
  {
    path: 'moves',
    component: MovesComponent,
  },
]

const routerOptions: ExtraOptions = {
  enableTracing: false,
}

@NgModule({
  declarations: [
    AppComponent,
    CharacterInfoComponent,
    IconGeneratorComponent,
    AttributesComponent,
    MovesComponent,
    NavHeaderComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes, routerOptions),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
