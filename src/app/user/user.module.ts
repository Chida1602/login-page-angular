import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
  children: [
    {
      path: "",
      component: UserhomeComponent
    },
    // {
    //   path:"details",
    //   component: DetailsComponent
    // }
  ]
}

]

@NgModule({
  declarations: [
    HomeComponent,
    UserhomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule,
    FormsModule
  ]
})
export class UserModule { }
