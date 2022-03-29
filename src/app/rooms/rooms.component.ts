import { Component, OnInit, Input } from '@angular/core';
import { RoomsService } from '../rooms.service';
//import { CurrentRoomService } from '../current-room.service';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  allRooms = this.rooms.getAllRooms()

  constructor(
    public rooms:RoomsService,
    //public currentRoom: CurrentRoomService
    ) { }

   handleChange =  () => {
    //console.log(this.currentRoom.room);
    console.log("radis li")
    // await changeRoom(event.target.value);
    // handleRoomChange(currentRoom);
  };
  ngOnInit(): void {
  }

}
