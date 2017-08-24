import { ChatService } from './../../../services/chat.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-send',
  templateUrl: './message-send.component.html',
  styleUrls: ['./message-send.component.css']
})
export class MessageSendComponent implements OnInit {
  private _chat;
  messageText: string;
  

  @Input()
  set chat(chat: any) {
    this._chat = chat;
  }

  @Input()
  loggedUsername;


  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
  }

  onMessageSubmit() {
    const msg = {
      author: this.loggedUsername,
      text: this.messageText
    };

    this.chatService.sendMessage(this._chat._id, msg)
      .subscribe((res) => {
        this.messageText = '';
      });
  }
}
