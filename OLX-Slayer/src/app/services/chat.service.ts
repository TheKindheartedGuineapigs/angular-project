import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ChatService {
  private apiAddress: string;
  private chatsDir: string;

  constructor(private http: Http) {
    this.apiAddress = environment.apiConfig.apiAddress;
    this.chatsDir = environment.apiConfig.chatsDir;
  }

  loadUserChats(loggedUsername: string) {
    return this.http.get(`${this.apiAddress}/${this.chatsDir}/${loggedUsername}`);
  }

  loadChat(loggedUsername: string, otherParticipant: string) {
    return this.http.get(`${this.apiAddress}/${this.chatsDir}?sender=${loggedUsername}&recipient=${otherParticipant}`);
  }

  sendMessage(id, message) {
    return this.http.post(`${this.apiAddress}/${this.chatsDir}/${id}`, message);
  }
}
