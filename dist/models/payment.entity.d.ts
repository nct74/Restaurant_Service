import { Order } from "./order.entity";
export declare class Payment {
    id: number;
    method: string;
    time: Date;
    status: boolean;
    createAt: Date;
    updateAt: Date;
    order: Order;
}
