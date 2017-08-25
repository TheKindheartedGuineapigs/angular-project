import { ChatService } from './../../services/chat.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  loggedUsername = 'gosho';
  otherUsername: string;
  chat;
  isDataLoaded: boolean;

  constructor(private route: ActivatedRoute, private chatService: ChatService) {
    this.isDataLoaded = false;
    this.otherUsername = route.snapshot.params.username;
  }

  ngOnInit() {
    this.loadChat(this.loggedUsername, this.otherUsername);
  }

  reloadData() {
    this.loadChat(this.loggedUsername, this.otherUsername);
  }

  private  loadChat(user1, user2) {
    return this.chatService.loadChat(user1, user2)
      .map(res => res.json())
      .subscribe((res) => {
        this.chat = res.result;
        this.isDataLoaded = true;
      });
  }
}
