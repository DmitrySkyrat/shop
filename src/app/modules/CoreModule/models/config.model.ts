export interface ConfigModel {
    id: string;
    login: string;
    email: string;
    password: string;
}
interface IObjectKeys {
    [key: string]: string;
  }
export interface AppSettingsModel extends IObjectKeys {
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
