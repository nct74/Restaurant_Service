import { Dish } from "src/models/dish.entity";
import { Repository } from "typeorm";
export declare class DishService {
    private dishRepository;
    constructor(dishRepository: Repository<Dish>);
    getAll(): Promise<Dish[]>;
    typeofDish(): Promise<any>;
    getdishofftype(type: string): Promise<Dish[]>;
    add(dish: Dish): Promise<void>;
    edit(dish: any): Promise<void>;
    getOne(id: number): Promise<Dish>;
    delete(dish: Dish): Promise<void>;
}
