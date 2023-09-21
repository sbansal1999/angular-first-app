import { Routes } from '@angular/router';
import { HelpPageComponent } from './help-page/help-page.component';
import { HomeComponent } from './home/home.component';
import { AddHomeComponent } from './add-home/add-home.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'details/:id',
    component: HelpPageComponent,
    title: 'Home Help Page',
  },
  {
    path: 'add',
    component: AddHomeComponent,
    title: 'Add Home Page',
  },
];

export default routeConfig;
