import { Component, OnInit } from '@angular/core';
import { Dishes } from '../models/dishes';

@Component({
  selector: 'app-dishe-review',
  templateUrl: './dishe-review.component.html',
  styleUrls: ['./dishe-review.component.css']
})
export class DisheReviewComponent implements OnInit {
dishDetails :Dishes= { 
  title: "Soy Sauce Eggs -  Ramen Eggs",
 href: "http://www.recipezaar.com/Soy-Sauce-Eggs-Ramen-Eggs-315722",
 ingredients: "eggs, rice vinegar, vegetable oil, soy sauce, sugar",
 thumbnail: "http://img.recipepuppy.com/33686.jpg",
};

  constructor() { }

  ngOnInit() {
  }

}
