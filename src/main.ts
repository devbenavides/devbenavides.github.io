import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

export const appConfig = {
  providers:[
    provideRouter(routes)
  ]
};
document.body.classList.add('dark');
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
