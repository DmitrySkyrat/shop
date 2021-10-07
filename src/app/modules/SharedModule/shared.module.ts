import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from './components/header/header.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FrameDirective } from './directives/frame.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ErrorComponent } from './components/error/error.component';

@NgModule({
    declarations: [
    HeaderComponent,
    HighlightDirective,
    FrameDirective,
    OrderByPipe,
    ErrorComponent
  ],
    imports: [RouterModule.forChild([]), CommonModule, FormsModule],
    exports: [CommonModule, FormsModule, HeaderComponent, ReactiveFormsModule, HighlightDirective, FrameDirective, OrderByPipe]
})
export class SharedModule {}
