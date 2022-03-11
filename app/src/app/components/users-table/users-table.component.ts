import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config-service';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
})
export class UsersTableComponent implements OnInit {
  users: any;

  constructor(private service: ConfigService) {}

  ngOnInit() {
    this.users = this.service.getUser("http://localhost:8080/api/user");
  }
}
