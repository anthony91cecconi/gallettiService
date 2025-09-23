import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [],
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.scss'
})
export class ServiceListComponent {
  constructor(private router: Router) {}

  changePath(path: string) {
    this.router.navigate([path]);
  }
}
