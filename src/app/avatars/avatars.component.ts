
import { Component, OnInit } from '@angular/core';

import { MemberService } from '../member.service';
import { avatars } from '../util/avatars';

@Component({
  selector: 'app-avatars',
  templateUrl: './avatars.component.html',
  styleUrls: ['./avatars.component.css']
})
export class AvatarsComponent implements OnInit {

  
  avatars:string[] = avatars
  constructor(private member:MemberService) { }

  selectAvatar = (event:any) => {
    this.member.setAvatar(event.target.value)
  }

  ngOnInit(): void {
  }

}
