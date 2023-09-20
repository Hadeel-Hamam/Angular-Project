import { IProduct } from './iproduct';

export interface IOrderItem {
  product: IProduct;
  count: number;
  totalPrice: number;
}
