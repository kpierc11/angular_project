import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config/config-service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {
  products:any

  constructor(private service: ConfigService) {}

  ngOnInit(){
  }

}
