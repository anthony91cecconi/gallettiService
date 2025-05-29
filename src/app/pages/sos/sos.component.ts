import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-sos',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './sos.component.html',
  styleUrl: './sos.component.scss'
})
export class SosComponent {

}
