import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-succes',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './succes.component.html',
  styleUrl: './succes.component.scss'
})
export class SuccesComponent {

}
