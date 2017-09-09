import { UserService } from './../../services/user.services';
import { Chat } from './../../models/chat';
import { ChatService } from './../../services/chat.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.component.html',
  styleUrls: ['./chatlist.component.css']
})
export class ChatlistComponent implements OnInit {
  loggedUsername: string;
  userId: string;
  chats: Chat[];
  isDataLoaded: boolean;

  constructor(private chatService: ChatService,
    private userService: UserService,
    private route: ActivatedRoute) {
    const loggedUser = route.snapshot.data['user'];

    if (!loggedUser) {
      // Handle error
    }

    this.userId = loggedUser.uid;
    this.isDataLoaded = false;
  }

  ngOnInit() {
    if (this.userId.length === 0) {
      // Handle error
    }

    this.loadUserDetails(this.userId)
      .flatMap((res) => {
        if (!res.username) {
          // Handle error
        }

        this.loggedUsername = res.username;

        return this.chatService.loadUserChats(res.username);
      })
      .map((res) => res.json())
      .subscribe((res) => {
        if (!res.result) {
          // Handle error
        }

        this.chats = res.result;
        this.isDataLoaded = true;
      });
  }

  private loadUserDetails(uid: string) {
    return this.userService.getUserDetails(uid);
  }

  private loadChats(username: string) {
    return this.chatService.loadUserChats(username);
  }
}
