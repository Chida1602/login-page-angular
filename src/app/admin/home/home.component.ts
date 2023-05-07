import { Component } from '@angular/core';
import { FooditemsService } from 'src/app/services/fooditems.service';


export interface User{
  "Food": String,
  "Measure": String,
  "Grams": Number,
  "Calories": Number,
  "Protein": Number,
  "Fat": Number,
  "Sat.Fat": Number,
  "Fiber": Number,
  "Carbs": Number,
  "Category": String
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  gdata:any;
  searchText:any;
  constructor(private cs:FooditemsService){
    this.gdata = cs.getProducts().subscribe({
      next: (data:any) => this.gdata = data,
      error:()=>this.gdata = []
    })
  }


  addDietPlan(){
    
  }
}
