import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductAppService } from 'src/app/Services/product-app.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  allProducts:any;
  p:number=1;
  
  constructor(private router: Router,private productAppService:ProductAppService,private toastr: ToastrService){}

  ngOnInit(): void {
    if(localStorage.getItem("jwt")){

      this.productAppService.getAllProducts().subscribe(res=>{

        this.allProducts=res.reverse();
        console.log(this.allProducts)
      })
    }
  }
  isRole(value:string){
    if(localStorage.getItem("role")==value){
      return true;
    }
    return false
  }
  isManger(value:string){
    if(localStorage.getItem("role")==value){
      return false;
    }
    return true
  }
  product:any;
  changeStatus(id:number,value:any){
    this.productAppService.getProductById(id).subscribe(res=>{
      this.product=res;
      
      this.productAppService.editProduct(id,{ name:this.product.name,
        quantity:this.product.quantity,
        price:this.product.price,
        status:value.target.value}).subscribe(res=>{
        
        })
    })
  }
  deleteProduct(id:any){
    this.productAppService.removeProduct(id).subscribe(res=>{
      console.log(res)
      this.toastr.success("Product Deleted Successfully","",{
                  
        positionClass:'toast-top-right'
  
      });
      this.ngOnInit()
    })
  
   }

}
