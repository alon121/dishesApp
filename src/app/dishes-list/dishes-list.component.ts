import { Component, OnInit } from '@angular/core';
import { Dishes } from '../models/dishes';
import { dishes_list } from '../models/dishes_list';

@Component({
  selector: 'app-dishes-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {
dishesListExample:Dishes[] = dishes_list;
selecteddish?: string;

selctedDish(dish:Dishes){
 /*  console.log(dish); */
  this.selecteddish=dish.title;
}
  constructor() { }

  ngOnInit() {
  }

}
