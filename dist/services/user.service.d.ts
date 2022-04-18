import { User } from "src/models/user.entity";
import { Repository } from "typeorm";
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getAll(): Promise<User[]>;
    getByUsername(username: string): Promise<User>;
    add(user: User): Promise<void>;
    edit(user: any): Promise<void>;
    delete(user: User): Promise<void>;
}
