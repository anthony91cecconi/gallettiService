import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-antitarlo',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './antitarlo.component.html',
  styleUrl: '../services.component.scss'
})
export class AntitarloComponent {

}
