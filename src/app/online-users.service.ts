import { Injectable } from '@angular/core';
import { Member } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class OnlineUsersService {
  onlineUsers!:Member[];

  constructor() { }

  addMember(member:Member) : void {
    this.onlineUsers = [...this.onlineUsers, member]
  }

  removeMember (id:string) : void {
    let newOnlineUsers = this.onlineUsers;
    const index = newOnlineUsers.findIndex((member) => member.id === id);
    newOnlineUsers.splice(index, 1);
    this.onlineUsers = newOnlineUsers;
  }
}
