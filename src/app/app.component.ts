import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Member} from './interfaces';
import { MemberService } from './member.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public member:MemberService) { }

  ngOnInit(): void {
  }



}
