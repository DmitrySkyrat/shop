export interface ProductModel {
    name: string;
    size: ProductSize;
    imgUrl: string;
    price: number;
    category: Category;
    isAvaliable: boolean;
    count?: number;
}

export interface Category {
    thin: ECategoryType,
    traditional: ECategoryType,
    cheeseBoard: ECategoryType
}

export enum ECategoryType {
    Thin = 'thin',
    Traditional = 'traditional',
    CheeseBoard = 'cheeseBoard'
}

export interface ProductSize {
    small: ESizeType;
    medium: ESizeType;
    big: ESizeType;
}

export enum ESizeType {
    Small = 26,
    Medium = 30,
    Big = 40
}
