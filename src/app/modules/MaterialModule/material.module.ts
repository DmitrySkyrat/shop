import {NgModule} from "@angular/core";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
    exports: [MatSidenavModule, MatButtonModule, MatMenuModule],
    declarations: []
})
export class MaterialModule {}
