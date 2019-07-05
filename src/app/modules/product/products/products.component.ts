import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[];
  productList:any = [];
  isLoadingResults = true;


  constructor(private api: ProductService) { }

  ngOnInit() {
    this.api.getProducts()
      .subscribe(res => {
        this.productList = res;
        console.log(this.productList);        
        this.isLoadingResults = true;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }
}
