import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Observable } from 'rxjs/Observable';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    imageWidth: number = 100;
    imageMargin: number = 2;
    errorMessage: string;
    id: number = 0;

    constructor(private _route: ActivatedRoute,
        private _router: Router, public _productService: ProductService) {
        this._route.params.subscribe(params => this.id = parseInt(params['id']));
        this.product = this._productService.products.filter((product:any) => product.productId === this.id)[0];
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }

}
