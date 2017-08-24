import { FormsModule } from '@angular/forms';
import { ChatService } from './../services/chat.service';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { ChatlistComponent } from './chatlist/chatlist.component';
import { MessageSendComponent } from './chatroom/message-send/message-send.component';
import { MessagesListComponent } from './chatroom/messages-list/messages-list.component';

const appRoutes: Routes = [
  { path: 'chats', component: ChatlistComponent },
  { path: 'chats/:username', component: ChatroomComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule,
    FormsModule
  ],
  declarations: [ChatroomComponent, ChatlistComponent, MessageSendComponent, MessagesListComponent],
  providers: [ChatService]
})
export class ChatModule { }
