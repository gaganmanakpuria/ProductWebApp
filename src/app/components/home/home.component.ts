import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductAppService } from 'src/app/Services/product-app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchText='' ;
 active:any="activate";
 allProducts:any;
 name:any;
 p:number=1;
 constructor(private router: Router,private productAppService:ProductAppService){
  this.router.routeReuseStrategy.shouldReuseRoute = () => false;
 }
 jwt:boolean=this.productAppService.isLoggedin();

  ngOnInit(): void {
    if(localStorage.getItem("jwt")){

      this.productAppService.getAllProducts().subscribe(res=>{

        this.allProducts=res
        for(var i = this.allProducts.length-1; i >=0 ; --i) {

          if (this.allProducts[i].status!='Approve') {

            this.allProducts.splice(i, 1);

          }

        }
       
      })
     
    }
  }
  // Search()

  // {

  //   if(this.name==""){

  //     this.ngOnInit();

  //   }else{

  //     this.allProducts=this.allProducts.filter((r:any)=>{

  //       return r.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());

  //     })

  //   }

  // }

}
