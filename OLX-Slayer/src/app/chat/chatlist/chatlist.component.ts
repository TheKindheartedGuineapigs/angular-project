import { ChatService } from './../../services/chat.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.component.html',
  styleUrls: ['./chatlist.component.css']
})
export class ChatlistComponent implements OnInit {
  chats;
  loggedUsername = 'az';

  constructor(private chatService: ChatService) { 
    this.chatService.loadUserChats(this.loggedUsername)
      .map((res) => res.json())
      .subscribe((res) => {
        this.chats = res.result;
      });
  }

  ngOnInit() {
    
  }

  showMessages() {
    this.chatService.loadUserChats(this.loggedUsername)
      .map((res) => res.json())
      .subscribe((res) => {
        console.log(res.result);
      });
  }
}
