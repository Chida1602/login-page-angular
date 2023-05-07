import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';


const route:Routes=[

  {
  path:"home",
  component: HomeComponent,
}]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    
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
