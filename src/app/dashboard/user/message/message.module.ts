import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { MessageFormComponent } from './create-message-form/message-form.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ReadMessageFormComponent } from './read-message-form/read-message-form.component';



@NgModule({
  declarations: [
    MessageComponent,
    MessageFormComponent,
    ReadMessageFormComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule

  ]
})
export class MessageModule { }
