import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { UserMessage } from 'src/app/model/userMessage';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent {
  message: UserMessage = new UserMessage()
  successMessage: string
  errorMessage: string

  constructor(private _messagesevice: MessageService){

  }

  onSubmit(form: NgForm){
    this.errorMessage = ""
    this.successMessage = ""

    this._messagesevice.sendMessage(this.message).subscribe({
      next: (data) =>{
        if(data.bool){
          this.successMessage = data.message
          form.resetForm()
        }else{
          this.errorMessage = data.message
          form.resetForm()
        }
      },
      error: (error) => {
        this.errorMessage = error.message
        form.resetForm()
      }
    })
  }

}
