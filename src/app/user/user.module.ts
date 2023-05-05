import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodProductsComponent } from './userhome/food-products/food-products.component';
import { FoodChildComponent } from './userhome/food-products/food-child/food-child.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FiltertypePipe } from '../pipes/filtertype.pipe';
import { DetailsBoxComponent } from './userhome/food-products/food-child/details-box/details-box.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


const route:Routes=[
  {path: "detailsbox/:id",component: DetailsBoxComponent},

  {
  path:"home",
  component: HomeComponent,
  children: [
    {
      path: "",
      component: UserhomeComponent
    },
    {
      path:"food",
      component: FoodProductsComponent
    }
  ]
}

]

@NgModule({
  declarations: [
    HomeComponent,
    UserhomeComponent,
    FoodProductsComponent,
    FoodChildComponent,
    FiltertypePipe,
    DetailsBoxComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ]
})
export class UserModule { }
