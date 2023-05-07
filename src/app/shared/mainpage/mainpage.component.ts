import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {
  constructor(private router:Router,private route:ActivatedRoute,
    public userService: UserService){}
  navigate(url:string){
    if(url==""){
      window.location.reload()
    }
    else{
      this.router.navigate([url],{relativeTo:this.route})
    }
  }
  logout(){
    this.router.navigateByUrl('/login')
  }
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
}
