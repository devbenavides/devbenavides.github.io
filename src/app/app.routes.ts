import { Routes } from '@angular/router';
import { About } from './features/about/about';
import { Projects } from './features/projects/projects';
import { Contact } from './features/contact/contact';
import { Home } from './features/home/home';
import { Stack } from './features/stack/stack';
import { Experience } from './features/experience/experience';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'stack', component: Stack },
  { path: 'projects', component: Projects },
  { path: 'experience', component: Experience },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
