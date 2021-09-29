import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from './components/header/header.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FrameDirective } from './directives/frame.directive';

@NgModule({
    declarations: [
    HeaderComponent,
    HighlightDirective,
    FrameDirective
  ],
    imports: [RouterModule.forChild([])],
    exports: [HeaderComponent, HighlightDirective, FrameDirective]
})
export class SharedModule {}
