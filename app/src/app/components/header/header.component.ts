import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'hello';
  list: string[] = [];
  user = {};

  constructor(private service:UserService) {}

  ngOnInit(): void {
    
    
  }
}
