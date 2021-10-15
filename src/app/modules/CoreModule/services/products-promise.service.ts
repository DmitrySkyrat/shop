import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from 'rxjs';
import { ProductModel } from "../../ProductsModule/models/product.model";

@Injectable({
    providedIn: 'root'
})
export class ProductsPromiseService {
    private productsUrl = 'http://localhost:3000/products';
    constructor(private http: HttpClient) {}

    getProducts(): Promise<ProductModel[]> {
        return firstValueFrom(this.http.get(this.productsUrl))
        .then(response => response as ProductModel[])
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
