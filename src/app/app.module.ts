import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SafePipe } from './safe.pipe';
import { HeaderComponent } from './header/header.component';
import { ImagenesComponent } from './imagenes/imagenes.component';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    HeaderComponent,
    ImagenesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
