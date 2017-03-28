import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {
    private _productUrl = 'api/products/mobiles.json';
    selectedProducts: any = [];
    products: any = [];
    producttype: string = 'tablet';
    
    constructor(private _http: Http) { }
    
    getProducts(): Observable<IProduct[]> {
        if(this.producttype ==='tablet')
        return this._http.get('api/products/tablets.json')
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
        else if(this.producttype ==='mobile')
         return this._http.get('api/products/mobiles.json')
            .map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProduct(id: number): Observable<IProduct> {
        return this.getProducts()
            .map(products => products.filter(product => product.productId === id)[0]);
    }

    private handleError(error: Response) {
       console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}