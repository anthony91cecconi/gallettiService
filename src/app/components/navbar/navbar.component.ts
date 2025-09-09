import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
   CommonModule,
   RouterModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private router: Router) {}

  onNavigate(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedRoute = target.value;
    this.router.navigateByUrl(selectedRoute);
  }


  openWhatsApp() {
    const phoneNumber = '393287863470';
    const message = encodeURIComponent('Ciao, ho bisogno di assistenza urgente. Ti contatto dal sito GallettiSolution.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Apri il link in una nuova scheda
    window.open(whatsappUrl, '_blank');
  }

  callNumber() {
    const phoneNumber = '+393287863470';
    const telUrl = `tel:${phoneNumber}`;

    window.open(telUrl, '_self');
  }
}
