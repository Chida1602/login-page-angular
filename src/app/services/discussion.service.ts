import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscussionService {
  httpOptions:any;

constructor(private http:HttpClient) { }




getReviews():Observable<any> {
return this.http.get("http://localhost:4500/forum")
}
postReview(obj:any):Observable<any>{
this.httpOptions = new HttpHeaders({
'Content-Type': 'application/json',
'Authorization': "Bearer"+localStorage.getItem("token")
})
return this.http.post("http://localhost:4500/forum",obj,this.httpOptions);
}
}
