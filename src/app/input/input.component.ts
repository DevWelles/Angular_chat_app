import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  messageValue!:string;

  @Input() onSendMessage!: (message:string) => void
  constructor() { }

  onSubmit() {
    this.onSendMessage(this.messageValue)
    //console.log(this.messageValue)
    this.messageValue="" 
  }

  ngOnInit(): void {
  }

}
