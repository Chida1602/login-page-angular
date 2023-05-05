import { Component } from '@angular/core';


@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent {
}
//   [x: string]: any;

//   id:any;
//   details:any;
//   constructor(private ds:DisplayallService,private ar:ActivatedRoute){
//     this.ar.params.subscribe(
//       {
//         next:(params)=>{
//           this.id.params['id']
//           this.readData()
//         },
//         error:()=>this.id=0
//       }
//     )
//   }
//   readData(){
//     this.ds.getDetails(this.id).subscribe(
//       {
//         next:(data:any)=>this.details=data,
//         error:()=>this.details={}
//       }
//     )
//   }
// }
