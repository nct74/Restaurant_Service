import { Order } from "./order.entity";
export declare class Payment {
    id: number;
    method: string;
    time: Date;
    status: string;
    createAt: Date;
    updateAt: Date;
    order: Order;
}
