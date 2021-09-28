import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from './components/header/header.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
    declarations: [
    HeaderComponent,
    HighlightDirective
  ],
    imports: [RouterModule.forChild([])],
    exports: [HeaderComponent, HighlightDirective]
})
export class SharedModule {}
