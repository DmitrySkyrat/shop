export interface CartProductModel {
    name: string;
    size: number;
    imgUrl: string;
    price: number;
    category: string;
    isAvaliable: boolean;
    count?: number;
}
