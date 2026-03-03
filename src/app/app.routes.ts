import { Routes } from '@angular/router';
import { Hero } from './features/home/hero/hero';
import { About } from './features/about/about';
import { Projects } from './features/projects/projects';
import { Contact } from './features/contact/contact';

export const routes: Routes = [
    { path: '', component: Hero, pathMatch: 'full' },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
