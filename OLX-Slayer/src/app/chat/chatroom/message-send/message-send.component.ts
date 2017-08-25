import { ChatService } from './../../../services/chat.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  @Output()
  messageSent: EventEmitter<any>;


  constructor(private chatService: ChatService) {
    this.messageSent = new EventEmitter();
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
        this.messageSent.emit('Sent');
      });
  }
}
