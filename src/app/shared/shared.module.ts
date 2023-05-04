import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesComponent } from './directives/directives.component';
import { MenuOutlineComponent } from './menu-outline/menu-outline.component';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [
    DirectivesComponent,
    MenuOutlineComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
