import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchmap';
import 'rxjs/add/operator/filter';

import 'rxjs/add/operator/catch';
import { Product } from "../model/product";
import { PriceRange } from "app/model/range";
import { Observable as OBS } from "rxjs/Rx";

@Injectable()

export class ProductService {
     url = "./assets/product.json";
     constructor(private http : Http) {}
     getProductList(categories: String[], range: PriceRange): Observable<Product[]> {
         
         return this.http.get(this.url)
                    .map((res:Response) => res.json())
                    .switchMap((products: Product[]) => OBS.from(products))
                    .filter((value: any, index:any): boolean => this.isMatch(value, categories, range))
                    .toArray(); 
     }

     isMatch(product: Product, categories: String[], range: PriceRange): boolean {
         
        if(product["price"] >= range.from && product["price"] <= range.to) {            
            let found = false;
            categories.forEach( function(item) {
                if(item == product['category']) {
                    found = true;
                }
            })
            return found;
        }
        else {
            return false;
        }
     }
}

