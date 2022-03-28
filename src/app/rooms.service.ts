import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  rooms =["observable-room1", "observable-room2", "observable-room3"]
  constructor() { }

  getFirstRoom () {
    return this.rooms[0]
  }

  getAllRooms(){
    return this.rooms
  }
}
