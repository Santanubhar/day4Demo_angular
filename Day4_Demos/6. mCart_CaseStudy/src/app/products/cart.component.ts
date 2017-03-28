import { Component, Input } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
import {IProduct} from './product';
import {Cart} from './Cart';
import { Http, Response, Headers } from '@angular/http';

@Component({
    selector: 'my-cart',
    templateUrl: 'app/products/cart.component.html'

})
export class CartComponent {
    pageTitle: string = 'My Cart';
    selectedProducts: any = [];
    imageWidth: number = 50;
    imageMargin: number = 2;
    grandTotal: any = 0;
    quantity: any = 0;
    submit: boolean;
    constructor(private _http: Http, private productService: ProductService,
        private _route: ActivatedRoute, private _router: Router) {
        this.submit = true;
        this.selectedProducts = this.productService.selectedProducts;

        for (let i = 0; i < this.selectedProducts.length; i++) {
            this.grandTotal += this.selectedProducts[i].totalPrice;
            this.quantity += this.selectedProducts[i].quantity;
        }
        sessionStorage.setItem("grandTotal", this.grandTotal);
        sessionStorage.setItem("selectedItems", this.quantity);
    }

    updateCart(product: Cart) {
        product.totalPrice = product.price * product.quantity;
        this.grandTotal = 0;
        this.quantity = 0;
        for (let i = 0; i < this.selectedProducts.length; i++) {
            this.grandTotal += this.selectedProducts[i].totalPrice;
            this.quantity += this.selectedProducts[i].quantity;
        }
        sessionStorage.setItem("grandTotal", this.grandTotal);
        sessionStorage.setItem("selectedItems", this.quantity);
    }
    remove(index: number) {

        this.selectedProducts.splice(index, 1);
        this.grandTotal = 0;
        this.quantity = 0;
        for (let i = 0; i < this.selectedProducts.length; i++) {
            this.grandTotal += this.selectedProducts[i].totalPrice;
            this.quantity += this.selectedProducts[i].quantity;
        }

        sessionStorage.setItem("grandTotal", this.grandTotal);
        sessionStorage.setItem("selectedItems", this.quantity);
    }

    onBack(): void {
        this._router.navigate(['/products', this.selectedProducts]);
    }
    
    checkout() {
        this.submit = false;
        this.productService.selectedProducts = [];
    }
    gotoProducts() {
        sessionStorage.removeItem("grandTotal");
        sessionStorage.removeItem("selectedItems");
        this._router.navigate(['/products']);
    }

}