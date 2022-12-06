import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductAppService } from 'src/app/Services/product-app.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  repeatPass:string='none'; 
  constructor(private  productAppService:ProductAppService,private router:ActivatedRoute,private routeurl:Router,private toastr: ToastrService) {
  }
  editUserForm=new FormGroup({
     fullName:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z]*")]),
     userName:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z].*")]),
     address:new FormControl("",[Validators.required]),
     city:new FormControl("",[Validators.required]),
     role:new FormControl("",[Validators.required]),
     password:new FormControl("",[Validators.required,Validators.minLength(5),
      Validators.maxLength(15)]),
     
 
   });

  ngOnInit(): void {
    this.productAppService.getUserById(this.router.snapshot.params['id'])
        .subscribe((res:any)=>{
          console.log(res)
          this.editUserForm=new FormGroup({
            fullName:new FormControl(res["name"],[Validators.required,Validators.pattern("[a-zA-Z]*")]),
            userName:new FormControl(res["userName"],[Validators.required,Validators.pattern("[a-zA-Z].*")]),
            address:new FormControl(res["address"],[Validators.required]),
            city:new FormControl(res["city"],[Validators.required]),
            role:new FormControl(res["role"],[Validators.required]),
            password:new FormControl(res["password"],[Validators.required,Validators.minLength(5),
             Validators.maxLength(15)]),
            
  
            })
  
          }) 
  }
  
  editUserSubmitted(){
    
      
      this.repeatPass="none";
      this.productAppService.editUser(this.router.snapshot.params['id'],{
        name:this.editUserForm.value.fullName,
        userName:this.editUserForm.value.userName,
        address:this.editUserForm.value.address,
        city:this.editUserForm.value.city,
        role:this.editUserForm.value.role,
        password:this.editUserForm.value.password,

      }).subscribe(
        res=>{
          //this.ngOnInit()
          this.toastr.success("User Updated Successfully","",{
                  
            positionClass:'toast-top-right'

          });
          this.routeurl.navigate(["/users"])

        }
      );
   
    // console.log(this.editUserForm);
  }
  get FullName():FormControl{
    return this.editUserForm.get("fullName") as FormControl;
  }
  get UserName():FormControl{
    return this.editUserForm.get("userName") as FormControl;
  }
  get Address():FormControl{
    return this.editUserForm.get("address") as FormControl;
  }
  get City():FormControl{
    return this.editUserForm.get("city") as FormControl;
  }
  get Role():FormControl{
    return this.editUserForm.get("role") as FormControl;
  }
  get Password():FormControl{
    return this.editUserForm.get("password") as FormControl;
  }
  
}
