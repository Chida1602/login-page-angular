import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { nutrition } from '../home/nutrition-model';
import { DietPlanService } from 'src/app/services/diet-plan.service';

@Component({
  selector: 'app-diet-plan-form',
  templateUrl: './diet-plan-form.component.html',
  styleUrls: ['./diet-plan-form.component.css']
})
export class DietPlanFormComponent implements OnInit {

  model: nutrition = new nutrition();

  constructor(private dietPlanService: DietPlanService ,
    private matSnackBar: MatSnackBar,
    private route: Router) { }

  ngOnInit() {
  }

  onSubmit(data:any){
    this.dietPlanService.addDietPlan(this.model).subscribe(res=>{
      this.matSnackBar.open("Diet Plan Added Successfully","Ok",{duration: 3000});
      this.route.navigate(['home'])
;    })
  }

  
  }

