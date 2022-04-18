import { UserService } from "src/services/user.service";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    index(): Promise<{
        userList: import("../../models/user.entity").User[];
    }>;
}
