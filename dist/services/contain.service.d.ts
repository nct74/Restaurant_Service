import { Contain } from "src/models/contain.entity";
import { Repository } from "typeorm";
export declare class ContainService {
    private containRepository;
    constructor(containRepository: Repository<Contain>);
    getAll(): Promise<Contain[]>;
    getByOrderId(id: number): Promise<Contain>;
    add(contain: Contain): Promise<void>;
    getListDishByOrderID(orderId: number): Promise<void>;
}
