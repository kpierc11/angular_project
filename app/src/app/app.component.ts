import { Component } from '@angular/core';
import { slideInAnimation } from './animations/animation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'app';
  list: string[] = ["one", "two", "three"];
  users: any;
  
  constructor() { }

  ngOnInit() {
    
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }

}
