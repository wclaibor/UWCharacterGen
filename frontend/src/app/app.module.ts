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
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app.routing.module'
import { IconGeneratorModule } from './icon-generator/icon-generator.module'
import { NavHeaderComponent } from './nav-header/nav-header.component'

@NgModule({
  declarations: [AppComponent, NavHeaderComponent],
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
    AppRoutingModule,
    IconGeneratorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
