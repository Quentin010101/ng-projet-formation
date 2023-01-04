import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { GlobalModule } from "src/app/global/global.module";
import { ImageUpdateFormComponent } from "./image-update-form/image-update-form.component";
import { ImageUpdateComponent } from "./image-update.component";

@NgModule({
    declarations:[
        ImageUpdateComponent,
        ImageUpdateFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        GlobalModule
    ]
})
export class ImageUpdateModule{

}