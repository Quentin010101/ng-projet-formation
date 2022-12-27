import { NgModule } from "@angular/core";
import { InputSubmitComponent } from "./input-submit/input-submit.component";
import { InputComponent } from "./input/input.component";
import { TextareaComponent } from "./textarea/textarea.component";


@NgModule({
  declarations: [
    InputComponent,
    InputSubmitComponent,
    TextareaComponent
  ],
  exports : [
    InputComponent,
    InputSubmitComponent,
    TextareaComponent
  ]
})
export class FormModule {}