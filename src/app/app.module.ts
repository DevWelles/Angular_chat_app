import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { OnlineUsersComponent } from './online-users/online-users.component';
import { MessagesComponent } from './messages/messages.component';
import { InputComponent } from './input/input.component';
import { RoomsComponent } from './rooms/rooms.component';
import { LogoutComponent } from './logout/logout.component';
import { AvatarsComponent } from './avatars/avatars.component';

const routes:Routes = [
  { path: 'chat', component: ChatComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
    OnlineUsersComponent,
    MessagesComponent,
    InputComponent,
    RoomsComponent,
    LogoutComponent,
    AvatarsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
