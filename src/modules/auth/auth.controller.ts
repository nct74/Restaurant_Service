import { Request, Response } from 'express';
import {
  Controller,
  Get,
  Render,
  UseGuards,
  Post,
  Req,
  Res,
  ForbiddenException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/models/user.entity';
import { UserRole, UserStatus } from 'src/constants/user.constant';
import { UserService } from 'src/services/user.service';

@Controller()
export class AuthController {
  constructor(private jwtService: JwtService, private userService: UserService) { }

  @Get('login')
  @Render("pos/login")
  async loginPage(@Req() req: Request) {
    const message = req.query['message'];
    const viewBag = {
      message: message
    }
    return viewBag;
  }

  @Post('login')
  @UseGuards(AuthGuard('local')) //Gaurd là function validate trong file local.strategy.ts
  async login(@Req() req: Request, @Res() res: Response) {
    const signedInfo: Object = req.user;
    // console.log(signedInfo);
    // console.log(signedInfo["username"])
    const username: string = req.user["username"] as string;
    // const usernameDomain = username.split("@")[1];
    let user: User = await this.userService.getByUsername(username);

    // //Cookies
    const accessToken = this.jwtService.sign(signedInfo);
    res.cookie('SE', accessToken);

    //console.log(user);
    if (!user || user.role == UserRole.EMPLOYEE || user.role == UserRole.ADMIN)
    return res.redirect("/dish");
  }

  @Get('logout')
  async logout(@Req() req: Request, @Res() res: Response) {
    res.clearCookie('SE');
    return res.redirect('/login');
  }
}