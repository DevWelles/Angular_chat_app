import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  @Input() logOut!: () => void
  constructor() { }



  ngOnInit(): void {
  }

}
