import { DishService } from "src/services/dish.service";
import { OrderService } from "src/services/order.service";
import { ContainService } from 'src/services/contain.service';
export declare class OrderController {
    private dishService;
    private orderService;
    private containService;
    constructor(dishService: DishService, orderService: OrderService, containService: ContainService);
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
    addOrder(arrid: Array<number>, arrquan: Array<number>, total: number): Promise<number>;
}
