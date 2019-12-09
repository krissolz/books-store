import { NgModule } from '@angular/core';

import { allServices } from './services';

@NgModule({
  providers: [
    ...allServices
  ],
  imports: []
})
export class ServiceModule { };