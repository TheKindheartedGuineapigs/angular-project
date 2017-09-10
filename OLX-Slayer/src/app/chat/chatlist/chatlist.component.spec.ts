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
import { ChatlistComponent } from './chatlist.component';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
 
describe('ChatlistComponent', () => {
  let component: ChatlistComponent;
  let fixture: ComponentFixture<ChatlistComponent>;
  let user;
  let chats: Chat[];
  let chatsToReturn;
  let chatService;
  let userService;
 
    beforeEach(async(() => {
        user = {
            username: 'loremipsum',
        };
 
        chats = [
            { _id: '0', participants: [user.username, 'other1'], messages: [] },
            { _id: '0', participants: [user.username, 'other2'], messages: [] },
            { _id: '0', participants: [user.username, 'other3'], messages: [] },
            { _id: '0', participants: [user.username, 'other4'], messages: [] },
            { _id: '0', participants: [user.username, 'other5'], messages: [] }
        ];
 
        chatsToReturn = {
            json: () => ({ result: chats }),
        };
 
        chatService = {
            loadUserChats: jasmine.createSpy('loadUserChats')
                .and.returnValue(Observable.of(chatsToReturn)),
        };
 
        userService = {
            getUserDetails: jasmine.createSpy('getUserDetails')
                .and.returnValue(Observable.of(user)),
        };
 
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
            ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/'},
                { provide: ChatService, useValue: chatService },
                { provide: UserService, useValue: userService },
                { provide: ActivatedRoute, useValue: {
                    snapshot: {
                        data: {
                            user: {
                                uid: '5',
                            }
                        }
                    }
                } },
            ],
            declarations: [ ChatlistComponent ]
        })
        .compileComponents();
    }));
 
    beforeEach(() => {
        fixture = TestBed.createComponent(ChatlistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
 
    it('should be created', () => {
        expect(component).toBeTruthy();
    });
 
    it('should properly set chats field upon logged user and available chats', () => {
        expect(component.chats.length).toEqual(5);
    });
 
    it('should call chatService.loadUserChats once upon init', () => {
        expect(chatService.loadUserChats.calls.count()).toEqual(1);
    });
 
    it('should call userService.getUserDetails once upon init', () => {
        expect(userService.getUserDetails.calls.count()).toEqual(1);
    });
 
    it('should set dataLoaded flag to true once all data is successfully loaded upon init', () => {
        expect(component.isDataLoaded).toEqual(true);
    });
 
    it('should set loggedUsername with proper value if user is logged in upon init', () => {
        expect(component.loggedUsername).toEqual('loremipsum');
    });
 
    it('should show "Chats of [loggedUsername] title', () => {
        const elements = fixture.debugElement.query(By.css('h2'));
        const title = elements.nativeElement;
 
        expect(title.textContent).toContain(component.loggedUsername);
    });
});