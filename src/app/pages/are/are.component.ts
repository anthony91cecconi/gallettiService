import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-are',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './are.component.html',
  styleUrl: './are.component.scss'
})
export class AreComponent {

}
