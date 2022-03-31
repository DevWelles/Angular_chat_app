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
  

  @Input() room?:any;
  @Input() subsrcibeRoom!: (event:any) => void

  constructor(
    public rooms:RoomsService,
    //public currentRoom: CurrentRoomService
    ) { }

   handleChange =  (event:any) => {
    //console.log(this.currentRoom.room);
    console.log("radis li")
    this.subsrcibeRoom(event.target.value)
    // await changeRoom(event.target.value);
    // handleRoomChange(currentRoom);
  };
  ngOnInit(): void {
  }

}
