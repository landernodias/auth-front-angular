import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<a [routerLink]="['admin']"> admin</a><br/><router-outlet></router-outlet>`,
})
export class AppComponent {
}
