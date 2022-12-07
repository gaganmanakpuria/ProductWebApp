import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { ProductAppService } from './Services/product-app.service';
// import {JwtHelperService} from 'auth0/angular-jwt'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  role:any=localStorage.getItem("role")
  token:any=localStorage.getItem("jwt")
  active:any="active";
  title = 'ℙ𝕣𝕠𝕕𝕦𝕔𝕥𝔸𝕡𝕡';
  constructor(private router: Router,private productAppService:ProductAppService,private toastr: ToastrService){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  jwt:any=localStorage.getItem("jwt");
  currentUser: BehaviorSubject<any> =new BehaviorSubject(null);
  ngOnInit(): void {
  }
  logInForm=new FormGroup({
    userName:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z].*")]),
    password:new FormControl("",[Validators.required,Validators.minLength(5), Validators.maxLength(15)]),
  });
  login(){
    // console.log(this.logInForm)
    this.productAppService.login({
      userName:this.logInForm.value.userName,
      password:this.logInForm.value.password
    }).subscribe({
      next: (response: any) => { console.log(response);
        localStorage.setItem('jwt',response);
        this.router.navigate(["/home"]);
        this.logInForm.reset();
        this.loadCurrentUser()
       window.location.reload();
      

      
       this.toastr.success("Login Successfully","",{
                  
        positionClass:'toast-top-right'

      });
       this.router.navigate([""]);

      },
        
      error: (err: HttpErrorResponse) => {
        this.logInForm.reset();
        this.toastr.error(" Please Add Valid User Id And Password!","",{
                  
          positionClass:'toast-top-right'

        });
        //alert("invalid login");
    }
  }
      )
  }
  jwtHelperService = new JwtHelperService();
 loadCurrentUser(){
 const token:any= localStorage.getItem("jwt");
 const userinfo=  this.jwtHelperService.decodeToken(token);
  const data= userinfo?{
    username:userinfo.username,
    userrole:userinfo.role
  }:null;
  localStorage.setItem("role",userinfo.role);

  this.currentUser.next(data);
 }
 
  logOut = () => {
  
  localStorage.clear();
  this.router.navigate(["/home"]);
  setTimeout(function(){window.location.reload(); }, 1000);
  this.router.navigate([""]);

   

  }
  get UserName():FormControl{
    return this.logInForm.get("userName") as FormControl;
  }
  get Password():FormControl{
    return this.logInForm.get("password") as FormControl;
  }

}
