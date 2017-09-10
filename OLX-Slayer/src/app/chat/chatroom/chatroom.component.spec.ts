import { FormsModule } from '@angular/forms';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessageSendComponent } from './message-send/message-send.component';
import { ChatroomComponent } from './chatroom.component';
import { By } from '@angular/platform-browser';
import { Chat } from './../../models/chat';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { firebaseConfig } from './../../../environments/firebase.config';
import { AuthModule } from './../../auth/auth.module';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule, FirebaseApp } from 'angularfire2';
import { Http, ConnectionBackend, RequestOptions, HttpModule, XHRBackend } from '@angular/http';
import { ActivatedRoute, ActivatedRouteSnapshot, UrlSegment, Route, ParamMap } from '@angular/router';
import { UserService } from './../../services/user.services';
import { ChatService } from './../../services/chat.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { APP_BASE_HREF } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { fakeAsync } from "@angular/core/testing";
import { tick } from "@angular/core/testing";

describe('Chatroom component', () => {
  let component: ChatroomComponent;
  let fixture: ComponentFixture<ChatroomComponent>;
  let user;
  let chat: Chat;
  let chatToReturn;
  let chatService;
  let userService;

    beforeEach(async(() => {
        user = {
            username: 'loremipsum',
        };

        chat = { _id: '42', participants: [], messages: [] };

        chatToReturn = {
            json: () => ({ result: chat }),
        };

        chatService = {
            loadChat: jasmine.createSpy('loadChat')
                .and.returnValue(Observable.of(chatToReturn))
        };

        userService = {
            getUserDetails: jasmine.createSpy('getUserDetails')
                .and.returnValue(Observable.of(user)),
        };

        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                FormsModule
            ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/'},
                { provide: ChatService, useValue: chatService },
                { provide: UserService, useValue: userService },
                { provide: ActivatedRoute, useValue: {
                    snapshot: {
                        params: {
                            username: 'pesho',
                        },
                        data: {
                            user: {
                                uid: '5',
                            }
                        }
                    }
                } },
            ],
            declarations: [ ChatroomComponent, MessageSendComponent, MessagesListComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChatroomComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should properly set otherUsername field', () => {
        expect(component.otherUsername).toEqual('pesho');
    });

    it('should properly set usedId', () => {
        expect(component.userId).toEqual('5');
    });

    it('should call userService.getUserDetails once upon init', () => {
        expect(userService.getUserDetails.calls.count()).toEqual(1);
    });

    it('should call chatService.loadChat once upon init', () => {
        expect(chatService.loadChat.calls.count()).toEqual(1);
    });

    it('should call chatService.loadChat with loggedUser username and otherUser username', () => {
        expect(chatService.loadChat).toHaveBeenCalledWith('loremipsum', 'pesho');
    });

    it('should set isDataLoaded to true after everything loads', () => {
        expect(component.isDataLoaded).toEqual(true);
    });

    it('should properly set chat field', () => {
        expect(component.chat._id).toEqual('42');
    });

    it('reloadData should call chatService.loadChat once', () => {
        chatService.loadChat.calls.reset();

        component.reloadData();

        expect(chatService.loadChat.calls.count()).toEqual(1);
    });

    it('reloadData should call chatService.loadChat with loggedUser username and otherUser username', () => {
        component.reloadData();
        expect(chatService.loadChat.calls.argsFor(1)).toContain('pesho');
        expect(chatService.loadChat.calls.argsFor(1)).toContain('loremipsum');
    });
});
