import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  dropdownOpen: string | null = null;

  toggleDropdown(menu: string) {
    this.dropdownOpen = this.dropdownOpen === menu ? null : menu;
  }

  callEmergenza() {
    // Puoi sostituire con una vera chiamata
    window.open('tel:+39111222333', '_self');
  }

  navigateToChiSiamo() {
    // Esegui routing alla pagina "Chi siamo"
    // Es. con Router: this.router.navigate(['/chi-siamo']);
    console.log('Naviga a chi siamo');
  }
}
