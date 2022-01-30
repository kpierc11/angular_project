import { Component } from '@angular/core';
import { ConfigService } from './config/config-service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  list: string[] = ["one", "two", "three"];
  users: any;
  
  constructor() { }

  ngOnInit() {
    
  }

}
