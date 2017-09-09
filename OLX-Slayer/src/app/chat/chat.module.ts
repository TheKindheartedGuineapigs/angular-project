import { ChatRoutingModule } from './chat-routing.module';
import { AuthGuardService } from './../services/auth.guard.service';
import { UserResolver } from './../utils/user.resolver';
import { FormsModule } from '@angular/forms';
import { ChatService } from './../services/chat.service';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { ChatlistComponent } from './chatlist/chatlist.component';
import { MessageSendComponent } from './chatroom/message-send/message-send.component';
import { MessagesListComponent } from './chatroom/messages-list/messages-list.component';



@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ChatRoutingModule
  ],
  declarations: [
    ChatroomComponent,
    ChatlistComponent,
    MessageSendComponent,
    MessagesListComponent
  ],
  providers: [
    ChatService,
    UserResolver
  ]
})

export class ChatModule { }
