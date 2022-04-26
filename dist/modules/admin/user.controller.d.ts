import { User } from 'src/models/user.entity';
import { Response } from 'express';
import { UserService } from 'src/services/user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    index(): Promise<{
        userList: User[];
    }>;
    add(user: User, res: Response): Promise<void>;
    edit(user: any, res: Response): Promise<void>;
    delete(user: any, res: Response): Promise<void>;
}
