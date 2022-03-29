import { compileComponentFromMetadata } from '@angular/compiler';
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

  resetMember() {
    // this.member = {
    //   clientData :{ username: "",
    //                 avatar: randomColor()},
    //   id:""
    // }
    this.member = {...this.member, clientData:{...this.member.clientData, username:""}}
  }

  setAvatar = (avatar:string) => {
    this.member = {...this.member, clientData:{...this.member.clientData, avatar:avatar }}
  }

  constructor() { }
}
