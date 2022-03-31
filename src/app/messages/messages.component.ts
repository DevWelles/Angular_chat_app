import { Component, OnInit, Input} from '@angular/core';
import { NewMessage } from '../interfaces';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  className!: string;

  @Input() messages!:NewMessage[];
  constructor(public member:MemberService) { }

  setClasses(message:any, member:any) {
    let classes = {
      "currentMember": message.member.id === member.member.id,
      "Messages-message" : true
    }
    return classes
  }

  ngOnInit(): void {
  }

}
