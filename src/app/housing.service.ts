import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly url = 'http://localhost:3000/locations';

  async getAllHouseLocations(): Promise<HousingLocation[]> {
    const response = await fetch(this.url);
    return (await response.json()) ?? [];
  }

  constructor() {}

  async getHouseLocationById(id: number): Promise<HousingLocation> {
    const response = await fetch(`${this.url}/${id}`);
    return (await response.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}
