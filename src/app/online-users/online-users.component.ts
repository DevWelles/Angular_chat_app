import { Component, OnInit,Input } from '@angular/core';
import { Member } from '../interfaces';
import { OnlineUsersService } from '../online-users.service';

@Component({
  selector: 'app-online-users',
  templateUrl: './online-users.component.html',
  styleUrls: ['./online-users.component.css']
})
export class OnlineUsersComponent implements OnInit {

  @Input() onlineUsers?:any
  constructor() {
    
   }

  ngOnInit(): void {
  }

}
