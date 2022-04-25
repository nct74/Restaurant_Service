/// <reference types="qs" />
import { Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/services/user.service';
export declare class AuthController {
    private jwtService;
    private userService;
    constructor(jwtService: JwtService, userService: UserService);
    loginPage(req: Request): Promise<{
        message: string | string[] | import("qs").ParsedQs | import("qs").ParsedQs[];
    }>;
    login(req: Request, res: Response): Promise<void>;
    logout(req: Request, res: Response): Promise<void>;
}
