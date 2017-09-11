import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserResolver } from './../utils/user.resolver';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { ChatlistComponent } from './chatlist/chatlist.component';
import { AuthGuardService } from './../services/auth.guard.service';

const chatRoutes: Routes = [
  {
    path: 'chats',
    canActivate: [AuthGuardService],
    children: [
      { path: '', component: ChatlistComponent, resolve: { user: UserResolver } },
      { path: ':username', component: ChatroomComponent, resolve: { user: UserResolver } }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(chatRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class ChatRoutingModule {}
