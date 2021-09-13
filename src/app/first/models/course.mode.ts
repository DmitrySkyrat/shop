export interface ICourse {
    name: string;
    description: string;
    price: number;
    category: EType;
    isAvaliable: boolean;
}

export enum EType {
    JavaScript,
    Java,
    Swift,
    Python
}
