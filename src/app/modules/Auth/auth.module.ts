import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LoginComponent } from './components/login.component';
import { SharedModule } from '../SharedModule/shared.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../MaterialModule/material.module';
import { CoreModule } from '../CoreModule/core.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild([{path: '', component: LoginComponent}]),
    SharedModule,
    MaterialModule,
    CoreModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {}
