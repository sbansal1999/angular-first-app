import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-help-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div>
      <img [src]="housingLocation?.photo" class="photo" />
      <p>{{ housingLocation?.name }}</p>
      <p>{{ housingLocation?.city }}</p>
      <p>{{ housingLocation?.state }}</p>
      <p>{{ housingLocation?.availableUnits }}</p>
      <p>{{ housingLocation?.wifi }}</p>
      <p>{{ housingLocation?.laundry }}</p>

      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First name</label>
        <input type="text" id="first-name" formControlName="firstName" />

        <label for="last-name">Last name</label>
        <input type="text" id="last-name" formControlName="lastName" />

        <label for="email">Email</label>
        <input type="text" id="email" formControlName="email" />

        <button type="submit">Apply</button>
      </form>
    </div>
  `,
  styleUrls: ['./help-page.component.css'],
})
export class HelpPageComponent {
  route = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    console.log(this.route.snapshot);
    const id = Number(this.route.snapshot.params['id']);
    this.housingService.getHouseLocationById(id).then((data) => {
      this.housingLocation = data;
    });
  }

  submitApplication() {
    console.log('something');
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
