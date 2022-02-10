import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config/config-service';
import { IProduct } from 'src/interfaces/product.interface';


@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css'],
})
export class FeaturedProductsComponent implements OnInit {
  public products: IProduct[] = [];

  constructor(private service: ConfigService) {}

  ngOnInit() {
    this.service
      .getProducts('http://localhost:8080/api/products')
      .subscribe((data) => this.products = data)
  }
}
