import {NgModule} from "@angular/core";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
    exports: [
        MatSidenavModule,
        MatButtonModule,
        MatInputModule,
        MatMenuModule,
        MatFormFieldModule,
        MatIconModule,
        MatDialogModule,
        MatCheckboxModule
    ],
    declarations: []
})
export class MaterialModule {}
