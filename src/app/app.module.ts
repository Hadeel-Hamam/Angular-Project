import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductsComponent } from './Components/products/products.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { FormsModule } from '@angular/forms';
import { BoxShadowDirective } from './Directives/box-shadow.directive';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { CreditFormatPipe } from './Pipes/credit-format.pipe';
import { CreditFormComponent } from './Components/credit-form/credit-form.component';
import { ComponentGroupComponent } from './Components/component-group/component-group.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { OpacityDirective } from './Directives/opacity.directive';
import { ParentSelectComponent } from './Components/parent-select/parent-select.component';
import { PostsComponent } from './Components/posts/posts.component';
import{ HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import { IntroPageComponent } from './Components/intro-page/intro-page.component';
import { CartListComponent } from './Components/cart-list/cart-list.component';
import { NgToastModule } from 'ng-angular-popup';
import { RegisterComponent } from './Components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProductsComponent,
    SideMenuComponent,
    BoxShadowDirective,
    NotFoundPageComponent,
    CreditFormatPipe,
    CreditFormComponent,
    ComponentGroupComponent,
    ProductDetailsComponent,
    OpacityDirective,
    ParentSelectComponent,
    PostsComponent,
    LoginComponent,
    IntroPageComponent,
    CartListComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgToastModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
