import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { ProductCookiesComponent } from './pages/product-cookies/product-cookies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    FeaturedProductsComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    LoginComponent,
    UsersTableComponent,
    ProductCookiesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, MatCardModule, MatButtonModule,MatGridListModule ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
