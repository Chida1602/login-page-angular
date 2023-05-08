import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SharedModule } from '../shared/shared.module';
import { DietPlanFormComponent } from './diet-plan-form/diet-plan-form.component';
import { ForumpageComponent } from './home/forumpage/forumpage.component';


const route:Routes=[
  // {
  //   path:"add-diet-plan",
  //   component: DietPlanFormComponent,
  // },
  // {
  //   path:"delete-diet-plan",
  //   component: DietPlanFormComponent,
  // },
  {
  path:"home",
  component: HomeComponent,
  children: [
    {
      path: "forum",
      component:ForumpageComponent
    }]
  },
  {
    path:"add-diet-plan",
    component: DietPlanFormComponent,
  },
  {
    path:"delete-diet-plan",
    component: DietPlanFormComponent,
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    DietPlanFormComponent,

    ForumpageComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(route),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    Ng2SearchPipeModule
   ]
})
export class AdminModule { }
