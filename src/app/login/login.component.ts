import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';


import { Member } from '../interfaces';
import { MemberService } from '../member.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inputLoginValue = "";
  
  @Output() login = new EventEmitter();

  constructor(
    private member:MemberService,
    ) { }
  
  onSubmit(): void {
    // Process checkout data here
    this.member.addUserName(this.inputLoginValue)
  }

  ngOnInit(): void {
  }

}
