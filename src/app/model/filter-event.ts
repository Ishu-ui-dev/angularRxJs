import { PriceRange } from "app/model/range";

export class FilterEvent {
    constructor(public categories:string[], public range : PriceRange) {}
}