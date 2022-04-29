import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraNavComponent } from './barra-nav/barra-nav.component';
import { SliderComponent } from './slider/slider.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { ModalTablaComponent } from './modal-tabla/modal-tabla.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path: 'barra-nav', component: BarraNavComponent},
  {path: 'slider', component: SliderComponent},
  {path: 'tarjetas', component: TarjetasComponent},
  {path: 'modal-tabla', component: ModalTablaComponent},
  {path: 'footer', component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
