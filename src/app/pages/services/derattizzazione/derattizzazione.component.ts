import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-derattizzazione',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './derattizzazione.component.html',
  styleUrl: '../services.component.scss'
})
export class DerattizzazioneComponent {

}
