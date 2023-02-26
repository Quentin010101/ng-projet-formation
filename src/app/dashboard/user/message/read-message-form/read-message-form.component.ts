import { Component, Input } from '@angular/core';
import { UserMessage } from 'src/app/model/userMessage';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-read-message-form',
  templateUrl: './read-message-form.component.html',
  styleUrls: ['./read-message-form.component.scss']
})
export class ReadMessageFormComponent {
@Input() message: UserMessage

successMessage: string
errorMessage: string

showComponent: boolean = true

constructor(private _messageservice: MessageService){}

delete(){
  this.errorMessage = ""
  this.successMessage = ""

  this._messageservice.deleteMessage(this.message).subscribe({
    next: (data) =>{
      if(data.bool){
        this.successMessage = data.message
        this.showComponent = false
      }else{
        this.errorMessage = data.message
      }
    },
    error: (error) => {
      this.errorMessage = error.message
    }
  })
}

}
