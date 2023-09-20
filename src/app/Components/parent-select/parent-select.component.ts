import { Component } from '@angular/core';
import { IOrderItem } from 'src/app/Models/IOrderItem';
import { ICategory } from 'src/app/Models/icategory';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-parent-select',
  templateUrl: './parent-select.component.html',
  styleUrls: ['./parent-select.component.css'],
})
export class ParentSelectComponent {
  selectedCatID: number = 0;
  ClientName: string;
  catList: ICategory[];
  cardList: IOrderItem[] = [];
  constructor(public productsService: ProductsService) {
    this.ClientName = '';
    this.catList = [
      { id: 1, name: 'Colored' },
      { id: 2, name: 'Black & White' },
      { id: 3, name: 'Oil Paintings' },
    ];
  }
  AddOrderItemToCardList(orderItem: IOrderItem) {
    // let isProductExist = this.productsService.isProductExist(
    //   orderItem.product.id
    // );
    // if (!isProductExist) {
    //   this.cardList.push(orderItem);
    // } else {
    //   let orderItemIndex = this.cardList.findIndex(
    //     (oItem) => oItem.product.id == orderItem.product.id
    //   );
    //   this.cardList[orderItemIndex] = orderItem;
    // }

    let isOrderItemExist = this.cardList.findIndex(
      (oItem) => oItem.product.id == orderItem.product.id
    );
    if (isOrderItemExist == -1) {
      this.cardList.push(orderItem);
      orderItem.product.quantity -= orderItem.count;
      let product = this.productsService.getProductByID(orderItem.product.id);
      // product!.quantity -= orderItem.count;
    } else {
      let oldOrderItem = this.cardList[isOrderItemExist];

      let product = this.productsService.getProductByID(orderItem.product.id);

      // product!.quantity += oldOrderItem.count;

      // this.cardList[isOrderItemExist] = orderItem;

      // product!.quantity -= orderItem.count;

      oldOrderItem.count+=orderItem.count;
      product!.quantity -= orderItem.count;
    }
  }
  removeFromCard(orderItem: IOrderItem){
    let index=this.cardList.indexOf(orderItem);
    this.cardList.splice(index,1);
    orderItem.product!.quantity += orderItem.count
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
