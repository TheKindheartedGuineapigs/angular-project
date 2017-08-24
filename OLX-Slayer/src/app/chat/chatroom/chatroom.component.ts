import { ChatService } from './../../services/chat.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  loggedUsername = 'az';
  otherUsername: string;
  chat;

  constructor(private route: ActivatedRoute, private chatService: ChatService) {
    console.log(route.snapshot.params.username);
  }

  ngOnInit() {
  }

}
