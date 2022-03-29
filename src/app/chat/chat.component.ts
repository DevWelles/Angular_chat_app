import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { Member, NewMessage } from '../interfaces';
import { MemberService } from '../member.service';
import { OnlineUsersService } from '../online-users.service';
import { RoomsService } from '../rooms.service';
//import { CurrentRoomService } from '../current-room.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  
  drone = new window.Scaledrone("r9cy0cQpxvzcmOQc", {
    data: this.member, 
  });

  room: any;
  currentRoom = this.rooms.getFirstRoom()
  messages:NewMessage[] =[];
  
  constructor(
    public member:MemberService,
    public onlineUsers:OnlineUsersService,
    public rooms:RoomsService,
   // public currentRoom: CurrentRoomService
    ) { }

   ngOnInit ()  {
    //console.log(this.messages)
    //console.log(this.member)
     this.drone.on("open", (error?:any) => {
      //console.log(this.drone)
      if (error) {
        return console.error(error);
      }
      this.member.setIdFromScaledrone(this.drone.clientId)
      
    });
     this.subsrcibeRoom()
    
  }

  subsrcibeRoom() {
    //console.log(this.currentRoom)
    //console.log(this.currentRoom.rooms.rooms[0])
    console.log(this.rooms.getFirstRoom())
    this.room = this.drone.subscribe(this.currentRoom);
    console.log(this.room)

    this.room.on("open", (error:any) => {
      if (error) {
        return console.error(error);
      }
    });

    this.room.on("members", (m:any) => { 
      //console.log(m)
      const members = m;
      this.onlineUsers= members;
    });

    this.room.on("member_join", (member:Member) => { 
      this.onlineUsers.addMember(member); //ne odradi mi ovo?
    });

    this.room.on("member_leave", ( id:string ): void => {
      this.onlineUsers.removeMember(id) //a ni ovo? error its not a function
    });

    this.room.on("message", (message:any) => {
      console.log(message)
      const { data, member, timestamp, id } = message;
      let time:any = timestamp * 1000;
      var date = new Date(timestamp * 1000);
      var hours = date.getHours();
      var minutes = date.getMinutes();
      time = `${hours}:${minutes}`;
      const newMessage = {
        member:{clientData:{avatar: member.clientData.member.clientData.avatar, username:member.clientData.member.clientData.username},
                id:member.id},
        text: data,
        timestamp: time,
        id_message: id,
      };
      this.messages.push(newMessage);
    });
  }

  onSendMessage = (message:string):void => {
    console.log(this.room)
    console.log(message)
    console.log(this.drone)
    this.drone.publish({
      room: this.currentRoom, //ovo obavezno mora biti samo string observable-room jer ja sam bija stavija cili objekt room
      message: message,
    });
  }

  logOut = ():void=> {
    this.drone.close();
    this.member.resetMember();
  }
  }

 
