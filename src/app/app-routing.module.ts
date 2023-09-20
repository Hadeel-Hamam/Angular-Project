import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentGroupComponent } from './Components/component-group/component-group.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { ProductsComponent } from './Components/products/products.component';
import { CreditFormComponent } from './Components/credit-form/credit-form.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ParentSelectComponent } from './Components/parent-select/parent-select.component';
import { PostsComponent } from './Components/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentGroupComponent,
    children: [
      { path: '', redirectTo: '/Home', pathMatch: 'full' },
      {path:'Home',component:ParentSelectComponent,title:'Products Page'},
      // { path: 'Home', component: ProductsComponent, title: 'Products Page' },
      { path: 'Credit', component: CreditFormComponent, title: 'Enter Credit'},
      { path: 'products/:id', component: ProductDetailsComponent, title: 'Product Details'},
      {path:'Posts',component:PostsComponent,title:'Posts Page'}
    ],
  },
  { path: '**', component: NotFoundPageComponent, title: 'Not Found Page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
