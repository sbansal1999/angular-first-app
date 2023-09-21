import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-add-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="addHomeForm" (submit)="submitForm()">
      <div class="d-flex flex-column gap-2 m-5">
        <label for="name">Name</label>
        <input id="name" formControlName="name" type="text" />

        <label for="city">City</label>
        <input id="city" formControlName="city" type="text" />

        <label for="city">State</label>
        <input id="city" formControlName="state" type="text" />

        <label for="city">Available Units</label>
        <input id="city" formControlName="availableUnits" type="number" />

        <label for="city">WiFi</label>
        <input id="city" formControlName="wifi" type="checkbox" />

        <label for="city">Laundry</label>
        <input id="city" formControlName="laundry" type="checkbox" />

        <label for="city">Photo URL</label>
        <input id="city" formControlName="photo" type="url" />

        <button type="submit" class="btn btn-primary">Add</button>
      </div>
    </form>
  `,
  styleUrls: ['./add-home.component.css'],
})
export class AddHomeComponent {
  housingService = inject(HousingService);
  addHomeForm = new FormGroup({
    name: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    availableUnits: new FormControl(''),
    wifi: new FormControl(''),
    laundry: new FormControl(''),
    photo: new FormControl(''),
  });

  submitForm() {
    console.log(this.addHomeForm.value);
    // this.housingService.addHouseLocation({
    //   id: this.housingService.getAllHouseLocations().length,
    //   name: this.addHomeForm.value.name ?? '',
    //   city: this.addHomeForm.value.city ?? '',
    //   state: this.addHomeForm.value.state ?? '',
    //   availableUnits: Number(this.addHomeForm.value.availableUnits) ?? 0,
    //   wifi: Boolean(this.addHomeForm.value.wifi) ?? false,
    //   laundry: Boolean(this.addHomeForm.value.laundry) ?? false,
    //   photo: this.addHomeForm.value.photo ?? '',
    // });
  }
}
