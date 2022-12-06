import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './AddGuard/login.guard';
import { AboutComponent } from './components/about/about.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/home",
    pathMatch:"full"
  },

  {
    component:HomeComponent,
    path:'home',
  },
  
  
  {
    component:AboutComponent,
    path:'about',
  },
  {
    component:ProductsComponent,
    path:'products',
    canActivate:[LoginGuard]
  },
  {
    component:UsersComponent,
    path:'users',
    canActivate:[LoginGuard]
  },
  {
    component:AddUserComponent,
    path:'add_user',
    canActivate:[LoginGuard]
  },
  {
    component:AddProductComponent,
    path:'add_product',
    canActivate:[LoginGuard]
  },

  {
    component:EditUserComponent,
    path:'edit_user/:id',
    canActivate:[LoginGuard]
  },
  {
    component:EditProductComponent,
    path:'edit_product/:id',
    canActivate:[LoginGuard]
  },
  {
    component:PageNotFoundComponent,
    path:'**',
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
