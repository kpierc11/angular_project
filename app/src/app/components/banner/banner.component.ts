import { Component, OnInit } from '@angular/core';
import 'bootstrap';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  constructor() {}

  //initialize bootstrap banner
  banner = document.querySelector('#carouselExampleCaptions');

  ngOnInit(): void {}
}
