import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email:any;
  password:any;
  result:any;
  constructor(private service: UserService) { }

  ngOnInit(): void {
  
  }

  handleLogin(): void {
    this.email = (<HTMLInputElement>document.querySelector('#user-email')).value;
    this.password = (<HTMLInputElement>document.querySelector('#user-password')).value;
    this.service.verifyLogin("http://localhost:8080/api/login",this.email, this.password).subscribe((data)=> console.log(data));
  }
}
