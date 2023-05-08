import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DiscussionService } from 'src/app/services/discussion.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {
  @Input() prod:string | undefined;

  reviewForm:any;
 
   reviews: any;
 
 
 
 
 
 
 
 
 
  constructor(private fb:FormBuilder,private fs:DiscussionService,private ar:ActivatedRoute){
 
   fs.getReviews().subscribe(
 
     {
 
       next:(data:any)=>this.reviews=data,
 
      error:()=>this.reviews=[]
 
     }
 
     )
 
   this.reviewForm = this.fb.group({
 
 
 
 name:['',[Validators.required,Validators.minLength(3)]],
 
 
 
 message:['',[Validators.required,Validators.minLength(4)]],
 
 
 
  email:['',[Validators.required, Validators.pattern( "^[A-Za-z][A-Za-z_\.0-9]+@[A-Za-z]+[\.][A-Za-z]{2,5}$")]],
 
   });
 
   }
 
   saveReview(product:any){
 
 var temp:any={
 
    id: Math.round(Math.random()*10000),
 
    name: this.reviewForm.value.name,
 
   email: this.reviewForm.value.email,
 
   message:this.reviewForm.value.message,
 
 
 
  product:product
 
 }
 
    this.fs.postReview(temp).subscribe(
 
   {
 
   next: data=>{
 
    alert('Thank you for your Review')
 
  },
 
   error:(error)=>alert('Not saved ---some Error')
 
  }
 
  )
 
 
 
    
 
  }
 
 
 
 }


  
