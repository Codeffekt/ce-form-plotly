import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CeCoreModule } from '@codeffekt/ce-core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),     
    provideRouter(routes),
    importProvidersFrom([
      BrowserAnimationsModule,
      CeCoreModule,
    ])    
  ]
};
