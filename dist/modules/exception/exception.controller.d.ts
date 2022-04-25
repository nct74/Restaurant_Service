import { Response } from 'express';
export declare class ExceptionController {
    page403(res: Response): Promise<void>;
    page401(res: Response): Promise<void>;
    page404(): void;
}
