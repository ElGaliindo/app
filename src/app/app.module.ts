import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavComponent } from './barra-nav/barra-nav.component';
import { SliderComponent } from './slider/slider.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { ModalTablaComponent } from './modal-tabla/modal-tabla.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavComponent,
    SliderComponent,
    TarjetasComponent,
    ModalTablaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
