import {Component, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ConocenosComponent} from './components/conocenos/conocenos.component';
import {FormacionComponent} from './components/formacion/formacion.component';
import {OnlineComponent} from './components/online/online.component';
import {CenterComponent} from './components/center/center.component';
import {MicuentaComponent} from './components/micuenta/micuenta.component';
import {ContactoComponent} from './components/contacto/contacto.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'conocenos', component: ConocenosComponent},
  {path: 'formacion', component: FormacionComponent},
  {path: 'formacion/:id', component: FormacionComponent},
  {path: 'online', component: OnlineComponent},
  {path: 'center/:id', component: CenterComponent},
  {path: 'center', component: CenterComponent},
  {path: 'micuenta', component: MicuentaComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
