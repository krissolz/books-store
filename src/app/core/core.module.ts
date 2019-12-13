import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

import { ServiceModule } from './services/service.module';
import { HeaderComponent } from './header/header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PagingComponent } from './paging/paging.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    PagingComponent
  ],
  imports: [
    CommonModule,
    ServiceModule
  ]
})
export class CoreModule { }
