import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductAppService } from 'src/app/Services/product-app.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  disable:boolean=true;
  constructor(private  productAppService:ProductAppService,private router:Router,private activeRoute:ActivatedRoute,private toastr: ToastrService) {
  }
  editProductForm=new FormGroup({
     name:new FormControl("",[Validators.required]),
     quantity:new FormControl("",[Validators.required]),
     price:new FormControl("",[Validators.required]),
    //  status:new FormControl("",[Validators.required]),
     
 
   });
status:any;
   ngOnInit(): void {
    this.productAppService.getProductById(this.activeRoute.snapshot.params['id'])
        .subscribe((res:any)=>{
          console.log(res)
          this.editProductForm=new FormGroup({
            name:new FormControl(res["name"],[Validators.required]),
            quantity:new FormControl(res["quantity"],[Validators.required]),
            price:new FormControl(res["price"],[Validators.required]),
            // status:new FormControl(,[Validators.required]),
            
          })
          this.status=res["status"];
  
          }) 
  }
  
  editProductSubmitted(){ 
   
      this.productAppService.editProduct(this.activeRoute.snapshot.params['id'],{
        name:this.editProductForm.value.name,
        quantity:this.editProductForm.value.quantity,
        price:this.editProductForm.value.price,
        status:this.status,
        

      }).subscribe(
        res=>{
          console.log(res);
          this.toastr.success("Updated Successfully","",{
                  
            positionClass:'toast-top-right'

          });
          this.router.navigate(["/products"]);
        }
      );
   
    
  }
  get name():FormControl{
    return this.editProductForm.get("name") as FormControl;
  }
  get quantity():FormControl{
    return this.editProductForm.get("quantity") as FormControl;
  }
  get price():FormControl{
    return this.editProductForm.get("price") as FormControl;
  }
  // get status():FormControl{
  //   return this.editProductForm.get("status") as FormControl;
  // }
  

}