import { InjectionToken } from '@angular/core';
import { PizzaDescriptionData, ProjectInfoModel } from "../models/config.model";

export const projectInfoInjector = new InjectionToken<ProjectInfoModel>('projectInfo');

export const projectInfo = {App: "TaskManager", Ver: "1.0", API_URL: "http://localhost:4200"};

export const pizzaDescriptions: PizzaDescriptionData[] = [
    { name: 'Cheeseburger Pizza', extra: 'Pepperoni, Bacon, Tomato Sauce, Tomatoes, Mozzarella cheese, Jalapeno',
     nutritionalValue: `<p>Fats - 11,6 g</p><p>Proteins - 9,5 g</p><p>Carbohydrates - 17,9 g</p><p>Nutritional value - 244,0 ccal</p>`,
     imgUrl: 'assets/cheeseburgerPizza.png'
    },
    { name: 'Cheese', extra: 'Tomato Sauce, Mozzarella cheese',
    nutritionalValue: `<html></html><p>Fats - 13,4 g</p><p>Proteins - 12,0 g</p><p>Carbohydrates - 18,8 g</p><p>Nutritional value - 214,5 ccal</p>`,
    imgUrl: 'assets/cheese.png'
    },
    { name: 'Cheese Chicken', extra: 'Garlic Sauce, Tomatoes, Mozzarella cheese, Chicken',
     nutritionalValue: `<p>Fats - 17,8 g</p><p>Proteins - 11,1 g</p><p>Carbohydrates - 16,5 g</p><p>Nutritional value - 271,4 ccal</p>`,
     imgUrl: 'assets/cheeseChicken.png'
    },
    { name: 'Asian Shrimp', extra: 'Shrimps x 2, Champignon, Pineapple, Mozzarella cheese, Garlic Sauce',
    nutritionalValue: `<p>Fats - 17,1 g</p><p>Proteins - 10,5 g</p><p>Carbohydrates - 17,9 g</p><p>Nutritional value - 268,6 ccal</p>`,
    imgUrl: 'assets/asianShrimp.png'
    }
];
