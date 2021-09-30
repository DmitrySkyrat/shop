import { Pipe, PipeTransform } from '@angular/core';
import { ProductModel } from '../../ProductsModule/models/product.model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(products: ProductModel[], key: string = 'popular'): ProductModel[] {
    switch (key) {
      case 'popular':
        return products;

      case 'by price':
        return products.sort((a, b) => a.price - b.price);

      case 'alphabetically':
        return products.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1 }
          if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1 }
          return 0;
        });

      default:
        return products;
    }
  }
}
