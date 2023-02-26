import { Component, OnInit } from '@angular/core';
import { UserMessage } from 'src/app/model/userMessage';
import { MessageService } from 'src/app/service/message.service';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent{
  messages: UserMessage[]

  constructor(private _messageservice: MessageService){}

  ngOnInit(){
    this._messageservice.getAllMessages().subscribe({
      next: (data) =>{ this.messages = data; console.log(data)}
    })
  }




}
