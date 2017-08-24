import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ChatService {

  constructor(private http: Http) { 
    // console.log(this.http);
  }

  loadUserChats(loggedUsername: string) {
    return this.http.get(`http://localhost:3000/api/chats/${loggedUsername}`);
  }
}