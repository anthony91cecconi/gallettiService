import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ServiceListComponent } from "../../components/service-list/service-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    ServiceListComponent,
    FooterComponent,
    ServiceListComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 slides: any[] = [
    //nato il 2000
    { imageUrl: '/img/personal/neutro.png', altText: 'Davide Galletti', title: 'Davide Galletti', text: "" },
    //nato il 1997
    { imageUrl: '/img/personal/neutro.png', altText: 'Simone Galletti', title: 'Simone Gallett', text: "" },
    //nato il 1968
    { imageUrl: '/img/personal/neutro.png', altText: 'Alfredo Galletti', title: 'Alfredo Galletti', text: "" },
  ];

  currentIndex = 0;
  private intervalId: any;

  constructor() {}

  goToNext(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

 goToPrevious(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  stopAutoplay(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
