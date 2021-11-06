import { ECategoryType, ESizeType, ProductModel } from "src/app/modules/ProductsModule/models/product.model";

export interface ProductsState {
    data: ReadonlyArray<ProductModel>
}

export const initialProductsState: ProductsState = {
    data: [
        {
            name: 'Cheeseburger Pizza', imgUrl: 'assets/cheeseburgerPizza.png', size: { small: ESizeType.Small, medium: ESizeType.Medium, big: ESizeType.Big }, price: 15.99,
            category: { traditional: ECategoryType.Traditional, thin: ECategoryType.Thin, cheeseBoard: ECategoryType.CheeseBoard }, isAvaliable: false, count: 0
        },
        {
            name: 'Cheese', imgUrl: 'assets/cheese.png', size: { small: ESizeType.Small, medium: ESizeType.Medium, big: ESizeType.Big }, price: 11,
            category: { traditional: ECategoryType.Traditional, thin: ECategoryType.Thin, cheeseBoard: ECategoryType.CheeseBoard }, isAvaliable: true, count: 0
        },
        {
            name: 'Cheese Chicken', imgUrl: 'assets/cheeseChicken.png', size: { small: ESizeType.Small, medium: ESizeType.Medium, big: ESizeType.Big }, price: 22,
            category: { traditional: ECategoryType.Traditional, thin: ECategoryType.Thin, cheeseBoard: ECategoryType.CheeseBoard }, isAvaliable: true, count: 0
        },
        {
            name: 'Asian Shrimp', imgUrl: 'assets/asianShrimp.png', size: { small: ESizeType.Small, medium: ESizeType.Medium, big: ESizeType.Big }, price: 11,
            category: { traditional: ECategoryType.Traditional, thin: ECategoryType.Thin, cheeseBoard: ECategoryType.CheeseBoard }, isAvaliable: true, count: 0
        }
    ]
}
