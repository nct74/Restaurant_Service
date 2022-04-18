// import { User } from './../../models/user.entity';
import { Request, Response } from 'express';
import {
  Controller,
  Get,
  Render,
  UseGuards,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/services/user.service';


@Controller()
export class AuthController {
  constructor(private jwtService: JwtService , private userService: UserService) {}

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
// @UseGuards(AuthGuard('local')) //Gaurd là function validate trong file local.strategy.ts
async login(@Req() req: Request, @Res() res: Response) {
    const signedInfo: Object = req.user;
    // console.log(signedInfo);
    //console.log(signedInfo["email"])
    // const email: string = req.user["email"] as string;
    // console.log(email);
    // const emailDomain = email.split("@")[1];
    // let user: Hocvien = await this.hocvienService.getByEmail(email);

    // if (!user && emailDomain != process.env["EMAIL_DOMAIN"])
    //     throw new ForbiddenException();

    // //Cookies
    const accessToken = this.jwtService.sign(signedInfo);
    res.cookie('LB', accessToken);
    res.redirect('hocviencourselist');
    // //End Cookies
    // //Roles 
    // if (process.env["ADMIN"].split(";").some((e) => e.trim() == email.trim())) {
    //     if (user == null)
    //         user = new User();
    //     user.email = process.env.ADMIN;
    //     user.role = UserRole.ADMIN;
    //     user.init = UserStatus.INITIALZED;
    //     await this.userService.save(user);
    // }
    // // End Roles
    // if (req.session["redirectUrl"]) {
    //     const redirectUrl = req.session["redirectUrl"];
    //     delete req.session["redirectUrl"];
    //     return res.redirect(redirectUrl);
    // }
    // console.log(user);
    // if (!user || user.role == UserRole.STUDENT)
    //     return res.redirect("/currentlibrary");
    // if (user.role == UserRole.ADMIN)
    //     return res.redirect("/user");
    // if (user.role == UserRole.LIBRARIAN)
    //     return res.redirect("/currentlibrary");
}

  @Get('logout')
  async logout(@Req() req: Request, @Res() res: Response) {
    res.clearCookie('LB');
    return res.redirect('/login');
  }
}
