import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    name: string;
    category: string;
    price: number;
    quantity: number;
    distributor: string;
    description: string;

    productList: Object;
    constructor(private product: ProductService) { }
    ngOnInit() { }
    // ngOnInit() {
    //     this.product.getProducts().subscribe(
    //         productList => {
    //             this.productList = productList
    //              console.log(this.productList);
    //         });
    // }

    saveProduct() {
        this.getProduct()
        alert("Product Saved");
        console.log("Product Saved");
    }

    getProduct() {
        this.product.getProduct(1).subscribe(
            product => {
                this.name = product['name'];
                this.category = product['category'];
                this.price = product['price'];
                this.distributor = product['serial_no'];
                this.quantity = product['quantity'];
                alert(this.name + this.category + this.price);
            });
    }

    getAllProducts() {
        console.log('All Product Fetched');
        alert('All Product Fetched');
    }

    updateProduct() {
        console.log('Product Updated');
        alert('Product Updated');
    }

    deleteProduct() {
        console.log('Product Deleted');
        alert('Product Deleted');
    }
}
