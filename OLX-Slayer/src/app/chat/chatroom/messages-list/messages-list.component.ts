import { Chat } from './../../../models/chat';
import { ChatService } from './../../../services/chat.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {
  @Input()
  loggedUsername: string;

  @Input()
  chat: Chat;

  @Output()
  refreshClicked: EventEmitter<any>;

  constructor(private route: ActivatedRoute, private chatService: ChatService) {
    this.refreshClicked = new EventEmitter();
  }

  onRefreshClick() {
    this.refreshClicked.emit('Refresh clicked');
  }

  ngOnInit() {
  }
}
