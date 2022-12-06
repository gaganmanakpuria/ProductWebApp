import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductAppService {
  

  constructor( private http: HttpClient) { }
  baseUrl="https://localhost:7232/";
  // baseUrl="https://localhost:8080/";

  
  login(user:any){
    return this.http.post(this.baseUrl+"api/Auth",user,{responseType:'text',})
  }
  
  isLoggedin():boolean{
    return localStorage.getItem("jwt")?true:false;
  }
  ////////////////////User//////////////////////////////////////////////////////////////////////
  getAllUsers():Observable<any>{
    return this.http.get(this.baseUrl+"api/Users")
  }
  addUser(user:any):Observable<any>{
    return this.http.post(this.baseUrl+"api/Users",user)
  }
  getUserById(id:any):Observable<any>{
    return this.http.get(this.baseUrl+"api/Users/"+id)
  }
  editUser(id:any,model:any):Observable<any>{
    
    return this.http.put(this.baseUrl+"api/Users/"+id,model)
  }
  removeUser(id:any):Observable<any>{
    return this.http.delete(this.baseUrl+"api/Users/"+id)
  }


/////////////////////////////////////////////Product//////////////////////////////////////////
  getAllProducts():Observable<any>{
    
    return this.http.get(this.baseUrl+"api/Products")
  }
  addProduct(product:any):Observable<any>{
    return this.http.post(this.baseUrl+"api/Products",product)
  }
  getProductById(id:any):Observable<any>{
    return this.http.get(this.baseUrl+"api/Products/"+id)
  }
  editProduct(id:any,model:any):Observable<any>{
    
    return this.http.put(this.baseUrl+"api/Products/"+id,model)
  }
  removeProduct(id:any):Observable<any>{
    return this.http.delete(this.baseUrl+"api/Products/"+id)
  }




}
