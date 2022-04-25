import { Request } from 'express';
import { ExtractJwt, JwtFromRequestFunction, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException, Req } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { UserRole } from 'src/constants/user.constant';
import { UserService } from 'src/services/user.service';

const cookieExtractor: JwtFromRequestFunction = function (req: Request) {
  let token = null;
  if (req && req.cookies) token = req.cookies['SE'];
  return token;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(user: any, accessToken: string): Promise<any> {
    console.log(user);
    const newUser = {
      email: user.email,
      accessToken,
      role: UserRole.STAFF,
    };
    const oldUser = await this.userService.getByUsername(user.email);
    console.log(oldUser);
    if (oldUser) {
      if (oldUser.role != UserRole.CUSTORMER) {
        await this.userService.update(user.email, oldUser);
        user.role = oldUser.role;
      }
    }
    return user;
  }
}
