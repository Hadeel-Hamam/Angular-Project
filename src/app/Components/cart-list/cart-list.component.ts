import { Component, OnInit } from '@angular/core';
import { IOrderItem } from 'src/app/Models/IOrderItem';
import { CartService } from 'src/app/Services/cart.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartList: IOrderItem[] = [];
  constructor(private  productService: ProductsService,public cartService:CartService) { }
  ngOnInit(): void {
    this.cartList = this.productService.getCartItems();
  }

  removeFromCart(orderItem: IOrderItem){
    let index=this.cartList.indexOf(orderItem);
    this.cartList.splice(index,1);
    orderItem.product!.quantity += orderItem.count
    this.cartService.removeFromCart();

  }
  increase(orderItem: IOrderItem) {
    orderItem.count++;
    orderItem.product.quantity--;
  }
  decrease(orderItem: IOrderItem) {
    orderItem.count--;
    orderItem.product.quantity++;
  }

}
