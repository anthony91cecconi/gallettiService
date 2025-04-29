import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { SosComponent } from './pages/sos/sos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SuccesComponent } from './pages/succes/succes.component';

export const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"services",component: ServicesComponent},
  {path:"solutions",component: SolutionsComponent},
  {path: "sos",component: SosComponent},
  {path: "contact", component: ContactComponent},
  {path: "succes" , component: SuccesComponent},
  {path: "**", redirectTo: "home" },
];
