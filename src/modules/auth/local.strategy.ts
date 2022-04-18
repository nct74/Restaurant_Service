
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import * as bcrypt from 'bcrypt'; 
import { UserService } from 'src/services/user.service';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor( private userservice: UserService) {
        super({
            usernameField: 'email'
        });
    }
//Authentication : Xác Thực   
//Authorication: Xác Nhận
    async validate(username: string, password: string) {
        const user = await this.userservice.getByUsername(username);
        console.log(user);
        if (!user) throw new UnauthorizedException("Không tồn tại tài khoản này");
        if (!(await bcrypt.compare(password, user.password))) throw new UnauthorizedException("Sai tài khoản hoặc mật khẩu");
        return { //Return 1 cái json
            email: user.username
        };
    }
}
