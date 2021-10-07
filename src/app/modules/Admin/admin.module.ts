import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../SharedModule/shared.module';
import { AdminComponent } from './components/admin.component';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
