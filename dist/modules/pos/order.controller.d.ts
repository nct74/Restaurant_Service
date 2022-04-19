import { DishService } from "src/services/dish.service";
export declare class OrderController {
    private dishService;
    constructor(dishService: DishService);
    index(): Promise<{
        data1: any;
        data2: any;
        data3: any;
        data: any;
        allofdata: import("../../models/dish.entity").Dish[];
    }>;
    getAll(ma: string): Promise<{
        data: import("../../models/dish.entity").Dish[];
    }>;
    addOrder(arrid: Array<void>, arrquan: Array<void>): Promise<void>;
}
