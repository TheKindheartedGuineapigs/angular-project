import { UserService } from './../../services/user.services';
import { Chat } from './../../models/chat';
import { ChatService } from './../../services/chat.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  userId: string;
  loggedUsername: string;
  otherUsername: string;
  chat: Chat;
  isDataLoaded: boolean;

  constructor(private route: ActivatedRoute,
    private chatService: ChatService,
    private userService: UserService) {
    const loggedUser = this.route.snapshot.data['user'];

    if (!loggedUser) {
      // Handle error
    }

    this.userId = loggedUser.uid;
    this.otherUsername = route.snapshot.params.username;
    this.isDataLoaded = false;
  }

  ngOnInit() {
    if (this.userId.length === 0) {
      // Handle error
    }

    this.userService.getUserDetails(this.userId)
      .flatMap((res) => {
        if (!res.username) {
          // Handle error
        }

        this.loggedUsername = res.username;

        return this.loadChat(this.loggedUsername, this.otherUsername);
      })
      .map((res) => res.json())
      .subscribe((res) => {
        if (!res.result) {
          // Handle error
        }

        if (Array.isArray(res.result)) {
          this.chat = res.result[0];
        } else {
          this.chat = res.result;
        }

        this.isDataLoaded = true;
      });
  }

  reloadData() {
    this.loadChat(this.loggedUsername, this.otherUsername)
      .map((res) => res.json())
      .subscribe((res) => {
        if (!res.result) {
          // Handle error
        }

        this.chat = res.result;
      });
  }

  private loadUserDetails(uid: string) {
    return this.userService.getUserDetails(uid);
  }

  private loadChat(user1: string, user2: string) {
    return this.chatService.loadChat(user1, user2);
  }
}
