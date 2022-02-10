import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config/config-service';
import { IProduct } from 'src/interfaces/product.interface';

@Component({
  selector: 'app-product-cookies',
  templateUrl: './product-cookies.component.html',
  styleUrls: ['./product-cookies.component.css']
})
export class ProductCookiesComponent implements OnInit {
  public products: IProduct[] = [];

  constructor(private service: ConfigService) {}

  ngOnInit(): void {
    this.service
    .getProducts('http://localhost:8080/api/products')
    .subscribe((data) => this.products = data)

  }

}
