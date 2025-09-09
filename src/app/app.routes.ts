import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { SosComponent } from './pages/sos/sos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SuccesComponent } from './pages/succes/succes.component';
import { SpurgoComponent } from './pages/services/spurgo/spurgo.component';
import { VideoispezioniComponent } from './pages/services/videoispezioni/videoispezioni.component';
import { DerattizzazioneComponent } from './pages/services/derattizzazione/derattizzazione.component';
import { AntitarloComponent } from './pages/services/antitarlo/antitarlo.component';
import { SanificazioneComponent } from './pages/services/sanificazione/sanificazione.component';
import { IdraulicaComponent } from './pages/services/idraulica/idraulica.component';
import { RistrutturazioniEdiliComponent } from './pages/services/ristrutturazioni-edili/ristrutturazioni-edili.component';
import { DisinfestazioneComponent } from './pages/services/disinfestazione/disinfestazione.component';
import { AreComponent } from './pages/are/are.component';

export const routes: Routes = [
  {path:"home", component: HomeComponent},

  //servizzi
  {path: 'servizi/Spurgo', component: SpurgoComponent },
  {path: 'servizi/Videoispezioni', component: VideoispezioniComponent },
  {path: 'servizi/Derattizzazione', component: DerattizzazioneComponent },
  {path: 'servizi/Antitarlo', component: AntitarloComponent },
  {path: 'servizi/Sanificazione', component: SanificazioneComponent },
  {path: 'servizi/Idraulica', component: IdraulicaComponent },
  {path: 'servizi/Ristrutturazioni-edili', component: RistrutturazioniEdiliComponent },
  {path: 'servizi/Disinfestazione', component: DisinfestazioneComponent },

  {path:"soluzioni",component: SolutionsComponent},

  {path: "sos",component: SosComponent},

  {path: "chi-siamo",component: AreComponent},

  {path: "contatti", component: ContactComponent},

  {path: "succes" , component: SuccesComponent},

  {path: "**", redirectTo: "home" },
];
