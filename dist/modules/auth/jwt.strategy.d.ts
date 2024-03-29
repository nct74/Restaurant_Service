import { Strategy } from 'passport-jwt';
import { UserService } from 'src/services/user.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    constructor(userService: UserService);
    validate(user: any, accessToken: string): Promise<any>;
}
export {};
