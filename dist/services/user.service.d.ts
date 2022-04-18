import { User } from "src/models/user.entity";
import { Repository } from "typeorm";
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getAll(): Promise<User[]>;
    getByUsername(username: string): Promise<User>;
}
