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
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
