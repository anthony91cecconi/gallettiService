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
}
