export interface ConfigModel {
    id: string;
    login: string;
    email: string;
    password: string;
}

export interface ProjectInfoModel {
    App: string;
    Ver: string;
    API_URL: string;
}

export interface PizzaDescriptionData {
    name: string;
    extra: string;
    nutritionalValue: string;
    imgUrl: string;
}
