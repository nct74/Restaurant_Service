import { Dish } from "src/models/dish.entity";
import { Response } from 'express';
import { DishService } from "src/services/dish.service";
declare global {
    var img: string;
}
export declare class DishController {
    private dishService;
    constructor(dishService: DishService);
    index(): Promise<{
        dishList: Dish[];
    }>;
    add(dish: Dish, res: Response): Promise<void>;
    edit(res: Response, dish: any): Promise<void>;
    getOne(id: number): Promise<Dish>;
    delete(dish: Dish, res: Response): Promise<void>;
}
