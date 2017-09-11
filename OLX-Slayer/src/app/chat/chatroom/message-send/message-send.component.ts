import { Message } from './../../../models/message';
import { Chat } from './../../../models/chat';
import { ChatService } from './../../../services/chat.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-send',
  templateUrl: './message-send.component.html',
  styleUrls: ['./message-send.component.css']
})
export class MessageSendComponent implements OnInit {
  messageText: string;

  @Input()
  chat: Chat;

  @Input()
  loggedUsername: string;

  @Output()
  messageSent: EventEmitter<any>;


  constructor(private chatService: ChatService) {
    this.messageSent = new EventEmitter();
  }

  ngOnInit() {
  }

  onMessageSubmit() {
    const msg = new Message();
    msg.author = this.loggedUsername;
    msg.text = this.messageText;

    this.chatService.sendMessage(this.chat._id, msg)
      .subscribe((res) => {
        this.messageText = '';
        this.messageSent.emit('Sent');
      });
  }
}
