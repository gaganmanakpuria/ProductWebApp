import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductAppService } from 'src/app/Services/product-app.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  constructor(private  productAppService:ProductAppService,private router:Router,private toastr: ToastrService) {
  }
  addProductForm=new FormGroup({
     name:new FormControl("",[Validators.required]),
     quantity:new FormControl("",[Validators.required]),
     price:new FormControl("",[Validators.required]),
    //  status:new FormControl("",[Validators.required]),
     
 
   });

  ngOnInit(): void {
  }
  
  addProductSubmitted(){ 
   
      this.productAppService.addProduct({
        name:this.addProductForm.value.name,
        quantity:this.addProductForm.value.quantity,
        price:this.addProductForm.value.price,
        status:"Pending",
        

      }).subscribe(
        res=>{
          this.toastr.success("New Product Added Successfully","",{
                  
            positionClass:'toast-top-right'

          });
          this.router.navigate(["/products"]);
        }
      );
   
    
  }
  get name():FormControl{
    return this.addProductForm.get("name") as FormControl;
  }
  get quantity():FormControl{
    return this.addProductForm.get("quantity") as FormControl;
  }
  get price():FormControl{
    return this.addProductForm.get("price") as FormControl;
  }
  // get status():FormControl{
  //   return this.addProductForm.get("status") as FormControl;
  // }
  

}
