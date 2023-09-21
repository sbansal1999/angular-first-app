import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="card">
      <img [src]="housingLocation.photo" class="photo" />
      <h2>{{ housingLocation.name }}</h2>
      <p>{{ housingLocation.city }} , {{ housingLocation.state }}</p>
      <p>{{ housingLocation.id }}</p>
      <a [routerLink]="['details', housingLocation.id]">Know more</a>
    </div>
  `,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;

  get stringy() {
    return JSON.stringify(this.housingLocation);
  }
}
