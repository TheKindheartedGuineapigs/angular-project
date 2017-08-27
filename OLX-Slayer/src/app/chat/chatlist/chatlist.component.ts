import { Chat } from './../../models/chat';
import { ChatService } from './../../services/chat.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.component.html',
  styleUrls: ['./chatlist.component.css']
})
export class ChatlistComponent implements OnInit {
  chats: Chat[];
  loggedUsername = 'tosho';
  isDataLoaded: boolean;

  constructor(private chatService: ChatService) {
    this.isDataLoaded = false;
  }

  ngOnInit() {
    this.loadChats(this.loggedUsername);
  }

  loadChats(username) {
    this.chatService.loadUserChats(username)
      .map((res) => res.json())
      .subscribe((res) => {
        this.chats = res.result;
        this.isDataLoaded = true;
      });
  }
}
