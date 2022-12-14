import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductAppService } from 'src/app/Services/product-app.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 name:any;
  allUsers:any;
  p:number=1;
  constructor(private router: Router,private productAppService:ProductAppService,private toastr: ToastrService){}

  ngOnInit(): void {
    if(localStorage.getItem("jwt")){

      this.productAppService.getAllUsers().subscribe(res=>{

        this.allUsers=res.reverse();
        
      })
    }
  }
  isManger(value:string){
    if(localStorage.getItem("role")==value){
      return false;
    }
    return true
  }
 deleteUser(id:any){
  this.productAppService.removeUser(id).subscribe(res=>{
    
    this.toastr.success("User Deleted Successfully","",{
                  
      positionClass:'toast-top-right'

    });
    this.ngOnInit()
  })

 }
  Search(){
    if(this.name==""){
      this.ngOnInit();
    }else{
      this.allUsers=this.allUsers.filter((res: { name: string; })=>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase()); 
      })
    }
  }
 
}
