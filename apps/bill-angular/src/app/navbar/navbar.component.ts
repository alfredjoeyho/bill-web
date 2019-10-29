import { Component } from '@angular/core';

@Component({
  selector: 'bill-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  private showMenu = false;

  constructor() {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  getMenuBottnClass(): string {
    if (!this.showMenu) {
      return 'menu-btn';
    } else {
      return 'menu-btn close';
    }
  }

  getMenuClass(): string {
    if (!this.showMenu) {
      return 'menu';
    } else {
      return 'menu show';
    }
  }

  getMenuNavClass(): string {
    if (!this.showMenu) {
      return 'menu-nav';
    } else {
      return 'menu-nav show';
    }
  }

  getNavItemClass(): string {
    if (!this.showMenu) {
      return 'nav-item';
    } else {
      return 'nav-item show';
    }
  }
}
