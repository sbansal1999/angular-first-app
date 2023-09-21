import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'something',
  standalone: true,
  template: `
    <div>
      {{ value }}
      <button (click)="increaseCounter()">Increase</button>
      <input
        type="text"
        id="filter-by-city"
        placeholder="Filter by city"
        #filter
      />
      <button class="filter-button" (click)="filterResults(filter.value)">
        Filter
      </button>
      <app-housing-location
        *ngFor="let abc of filteredList"
        [housingLocation]="abc"
      >
      </app-housing-location>
      <p *ngIf="abc[0] === 'something'">{{ abc[2] }}</p>
    </div>
  `,
  styleUrls: ['./home.component.css'],
  imports: [HousingLocationComponent, CommonModule],
})
export class HomeComponent {
  value = 1;
  abc = ['something', 'else'];

  dataList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  filteredList: HousingLocation[] = [];

  constructor() {
    this.housingService.getAllHouseLocations().then((data) => {
      this.dataList = data;
      this.filteredList = data;
    });
  }

  increaseCounter() {
    this.value++;
  }

  filterResults(filter: string) {
    console.log('filterResults', filter);
    if (!filter) {
      this.filteredList = this.dataList;
    }

    this.filteredList = this.dataList.filter((house) =>
      house.city.toLowerCase().includes(filter.toLowerCase())
    );
  }
}
