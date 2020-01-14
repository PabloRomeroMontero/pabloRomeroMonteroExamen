import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {ConocenosComponent} from './components/conocenos/conocenos.component';
import {CenterComponent} from './components/center/center.component';
import {FormacionComponent} from './components/formacion/formacion.component';
import {OnlineComponent} from './components/online/online.component';
import {FirebaseService} from './services/firebase.service';
// import { CallbackComponent } from './components/callback/callback.component';
// import {AuthService} from './services/angular-auth.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';
import { MicuentaComponent } from './components/micuenta/micuenta.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ConocenosComponent,
    CenterComponent,
    FormacionComponent,
    OnlineComponent,
    // CallbackComponent,
    MicuentaComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyDbB-cciES0z4gFI37ZeY0uWp5Qc57cDCI'
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
