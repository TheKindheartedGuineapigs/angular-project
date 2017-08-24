import { ChatService } from './../services/chat.service';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { ChatlistComponent } from './chatlist/chatlist.component';

const appRoutes: Routes = [
  { path: 'chats', component: ChatlistComponent },
  { path: 'chats/:username', component: ChatroomComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  declarations: [ChatroomComponent, ChatlistComponent],
  providers: [ChatService]
})
export class ChatModule { }
