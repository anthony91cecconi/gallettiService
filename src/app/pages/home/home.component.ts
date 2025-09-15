import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 slides: any[] = [
    { imageUrl: '/img/personal/neutro.png', altText: 'Descrizione immagine 1', title: 'test 1' },
    { imageUrl: '/img/personal/neutro.png', altText: 'Descrizione immagine 2', title: 'test 2' },
    { imageUrl: '/img/personal/neutro.png', altText: 'Descrizione immagine 3', title: 'test 3' },
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
