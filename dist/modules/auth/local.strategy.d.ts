import { UserService } from 'src/services/user.service';
declare const LocalStrategy_base: new (...args: any[]) => any;
export declare class LocalStrategy extends LocalStrategy_base {
    private userservice;
    constructor(userservice: UserService);
    validate(username: string, password: string): Promise<{
        email: string;
    }>;
}
export {};
