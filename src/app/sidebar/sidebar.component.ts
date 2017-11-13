import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, ViewChild } from '@angular/core';
import { FilterEvent } from "app/model/filter-event";
import { MatSelectionList } from "@angular/material/list";
import { PriceRange } from "app/model/range";

@Component({
  selector: 'dw-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    title = "All Categories";
    rangeData = {
        "max" : 100000,
        "min" : 100,
        "value" : 100000
    }
    private categoryList = ["Electronics", "Fashion", "Appliances", "Books", "Home & Furniture"]    
    @ViewChild('category') selectedItem : MatSelectionList;
    @Output() filterLoader = new EventEmitter<FilterEvent>();    
    sendMessage() {
        let selectedCategories:string[] = [];
        let filterEvent = new FilterEvent(selectedCategories, new PriceRange(this.rangeData.min, this.rangeData.value));
        this.selectedItem.selectedOptions.selected.forEach(function(item) {           
            selectedCategories.push(item.value);
            console.log(item.value);
        })
        this.filterLoader.emit(filterEvent);
    }
    constructor() { }    
    ngOnInit() { 
        var filterEvent  = new FilterEvent(this.categoryList, new PriceRange(this.rangeData.min, this.rangeData.value));
        this.filterLoader.emit(filterEvent);
    }

}
