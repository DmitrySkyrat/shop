import { NgModule } from "@angular/core";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    // imports: [MatSidenavModule, MatButtonModule], // не обязательно
    exports: [MatSidenavModule, MatButtonModule],
    declarations: []
})
export class MaterialModule {}
