import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AddHomeComponent } from './add-home/add-home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule, AddHomeComponent],
  template: `<h1>Hello world!</h1>
    <a [routerLink]="['/']">Home</a>
    <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
