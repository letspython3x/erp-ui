import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'price'];
  productList: Product[] = [];
  isLoadingResults = true;

  constructor(private api: ProductService) { }

  ngOnInit() {
    this.api.getProducts()
      .subscribe(res => {
        this.productList = res;
        console.log(this.productList);
        console.log('hi');
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }
}
