import { Injectable } from '@angular/core';
import { Member } from './interfaces';
import { randomColor } from './util/helper';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  member:Member = {
    clientData :{ username: "",
                  avatar: randomColor()},
    id:""
 
  }

  addUserName(name:string){ 
    this.member.clientData.username = name
  }

  setIdFromScaledrone(scaledroneId:string){
    this.member.id = scaledroneId
  }

  constructor() { }
}
