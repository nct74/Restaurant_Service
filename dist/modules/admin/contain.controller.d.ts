import { ContainService } from "src/services/contain.service";
export declare class ContainController {
    private containService;
    constructor(containService: ContainService);
    getDetail(orderId: any): Promise<{
        detailList: void;
    }>;
}
