import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.goHome.bind(this) },
    { label: 'Sobre', action: this.goToAbout.bind(this) }
  ];

  constructor(private router: Router) {}

  private goHome() {
    this.router.navigate(['/']);
  }

  private goToAbout() {
    this.router.navigate(['/sobre']);
  }

}
