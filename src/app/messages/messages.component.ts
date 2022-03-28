import { Component, OnInit, Input} from '@angular/core';
import { NewMessage } from '../interfaces';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  className ="fsfsd"

  @Input() messages!:NewMessage[];
  constructor(public member:MemberService) { }

  toggleClass() {
    this.messages.map(message => {
      const myMessage = this.member.member.id === message.member.id //true ili false
      if (myMessage){
        this.className = "Messages-message currentMember"
      } else{
        this.className = "Messages-message"
      }
    })
  }

  ngOnInit(): void {
  }

}
