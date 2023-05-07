import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DiettypeService } from 'src/app/services/diettype.service';

@Component({
  selector: 'app-typedetails',
  templateUrl: './typedetails.component.html',
  styleUrls: ['./typedetails.component.css']
})
export class TypedetailsComponent {
  id:any;
  details1:any;
  constructor(private Ds:DiettypeService,private ar:ActivatedRoute){
    
  this.ar.params.subscribe(
  {
  next: (params)=>{ 
     this.id =params['id']
    this.readData()
  },
  error: () => this.id = 0
   }
  )
}

   readData(){
   this.Ds.getDetails(this.id).subscribe(
        {
        next: (data:any)=>this.details1=data,
        error: ()=> this.details1 = {}
     }
    )
 }
 
}
