import { Routes } from '@angular/router';
import { AboutComponent } from '@pages/about/about.component';
import { HomeComponent } from '@pages/home/home.component';
import { ServicesComponent } from '@pages/services/services.component';
import { NotFoundComponent } from '@shared/components/not-found/not-found.component';
import { MainComponent } from '@shared/layout/main/main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'about', component: AboutComponent },
      { path: '**', component: NotFoundComponent },
    ]
  },
];
