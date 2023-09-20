import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  currentProductId: number = 0;
  product: IProduct | undefined = undefined;
  productIDs: number[] = [];
  constructor(
    public productService: ProductsService,
    public activatedRoute: ActivatedRoute,
    public location: Location,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.productIDs = this.productService.getProductsIDs();
    // this.currentProductId=(this.activatedRoute.snapshot.paramMap.get('id'))?Number(this.activatedRoute.snapshot.paramMap.get('id')):0;
    // this.product=this.productService.getProductByID(this.currentProductId);

    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.currentProductId = Number(paramMap.get('id'));
      this.product = this.productService.getProductByID(this.currentProductId);
    });
    // console.log(this.product);
  }
  goBack() {
    // window.history.back();
    this.location.back();
  }
  prevPrd() {
    let currentIndex = this.productIDs.findIndex(
      (ele) => ele == this.currentProductId
    );
    // console.log(currentIndex);
    let prevPrdID;
    if (currentIndex > 0) {
      prevPrdID = this.productIDs[currentIndex - 1];
      this.router.navigate(['/products', prevPrdID]);
    }
  }
  nextPrd() {
    let currentIndex = this.productIDs.findIndex(
      (ele) => ele == this.currentProductId
    );
    // console.log(currentIndex);
    let nextPrdID;
    if (currentIndex < this.productIDs.length) {
      nextPrdID = this.productIDs[currentIndex + 1];
      this.router.navigate(['/products', nextPrdID]);
    }
  }
}
