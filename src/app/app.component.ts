import { Component, OnInit } from '@angular/core';
import { ProductService } from "app/service/product.service";
import { Product } from "app/model/product";
import { PriceRange } from "app/model/range";
import { FilterEvent } from "app/model/filter-event";

@Component({
  selector: 'dw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';
  private products:Product[];
  message: string;
  constructor(private productService : ProductService) {}
  ngOnInit() {
    this.productService.getProductList([], null)
    .subscribe(data => this.products = data);
  }
  applyFilter($event:FilterEvent) {    
    this.productService.getProductList($event.categories, $event.range)
    .subscribe(data => {
      this.products = data
    });
  }
}
