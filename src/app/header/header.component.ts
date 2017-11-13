import { Component } from "@angular/core";

@Component({
    selector : 'dw-header',
    templateUrl : './header.component.html',
    styleUrls : ['./header.component.scss']
})

export class HeaderComponent {
    title = "DarwinShop"
    private categoryList = ["Electronics", "Fashion", "Appliances", "Books", "Home & Furniture"]
   //private categoryList = [{"name" : "Electronics" }, {"name" : "Fashion"}, {"name" : "Appliances"}, {"name" : "Books"}, {"name" : "Home & Furniture"}]
}
