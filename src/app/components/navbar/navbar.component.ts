import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  currentRoute = 'instagram';
  constructor(private router: Router) { }

  isActive(page: string): boolean {
    return this.currentRoute === page;
  }
  clickNav(data: string) {
    this.currentRoute = data
  }
}
