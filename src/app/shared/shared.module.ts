import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives/directives.component';
import { MenuOutlineComponent } from './menu-outline/menu-outline.component';
import { ServicesComponent } from './services/services.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    DirectivesComponent,
    MenuOutlineComponent,
    ServicesComponent,
    MainpageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],

  exports:[MainpageComponent]
})
export class SharedModule { }
