import { Injectable } from '@angular/core';
import { Member } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class OnlineUsersService {
  onlineUsers!:Member[];

  constructor() { }

  addMember = (member:Member)  =>{
    this.onlineUsers = [...this.onlineUsers, member]
  }

  removeMember = (id:string) => {
    let newOnlineUsers = this.onlineUsers;
    const index = newOnlineUsers.findIndex((member) => member.id === id);
    newOnlineUsers.splice(index, 1);
    this.onlineUsers = newOnlineUsers;
  }
}
