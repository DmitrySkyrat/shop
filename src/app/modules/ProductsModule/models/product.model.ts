export interface ProductModel {
    name: string;
    size: number;
    price: number;
    category: EType;
    isAvaliable: boolean;
}

export enum EType {
    Thin,
    Traditional,
    CheeseBoard
}
