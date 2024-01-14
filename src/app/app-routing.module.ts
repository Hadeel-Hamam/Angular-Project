import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentGroupComponent } from './Components/component-group/component-group.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { ProductsComponent } from './Components/products/products.component';
import { CreditFormComponent } from './Components/credit-form/credit-form.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ParentSelectComponent } from './Components/parent-select/parent-select.component';
import { PostsComponent } from './Components/posts/posts.component';
import { LoginComponent } from './Components/login/login.component';
import { IntroPageComponent } from './Components/intro-page/intro-page.component';
import { authGuard } from './Guards/auth.guard';
import { CartListComponent } from './Components/cart-list/cart-list.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentGroupComponent,
    children: [
      { path: '', redirectTo: '/Home', pathMatch: 'full' },
      {path:'Products',component:ParentSelectComponent,title:'Products Page',canActivate:[authGuard]},
      // { path: 'Home', component: ProductsComponent, title: 'Products Page' },
      {path:'MyCartList',component:CartListComponent,title:'MyCartList',canActivate:[authGuard]},
      { path: 'Credit', component: CreditFormComponent, title: 'Enter Credit'},
      { path: 'product/:id', component: ProductDetailsComponent, title: 'Product Details',canActivate:[authGuard]},
      {path:'Posts',component:PostsComponent,title:'Posts Page'}
    ],
  },
  {path:'Home',component:IntroPageComponent,title:'Products Page'},
  {path:'Login',component:LoginComponent,title:'Login'},
  // {path:'Logout',component:LoginComponent,title:'Login'},
  { path: '**', component: NotFoundPageComponent, title: 'Not Found Page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
