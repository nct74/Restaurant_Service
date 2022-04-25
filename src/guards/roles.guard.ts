// import { ActivityApproval } from './../constants/activity.constant';
import { ROLES_KEY } from "./../decorators/roles.decorator";
import { Response } from "express";
import { Request } from "express";
import {
	Injectable,
	CanActivate,
	ExecutionContext,
	ForbiddenException,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { Reflector } from "@nestjs/core";
import { UserRole } from "src/constants/user.constant";

@Injectable()
export class RoleGuard implements CanActivate {
	constructor(private reflector: Reflector) { }

	canActivate(context: ExecutionContext): boolean {
		const ctx = context.switchToHttp();
		const request = ctx.getRequest<Request>();
		const response = ctx.getResponse<Response>();

		const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(
			ROLES_KEY,
			[context.getHandler(), context.getClass()]
		);

		// console.log(requiredRoles);

		if (!requiredRoles) {
			return true;
		}
		const user = request.user;
		response.locals["user"] = user;
		// console.log(user);
		// console.log(UserRole);
		response.locals["UserRole"] = UserRole;
		// response.locals["ActivityApproval"] = ActivityApproval;
		return requiredRoles.some((role) => user["role"] == role); // => Return true, đã check đúng guards, return false => Nestjs auto throw forbidden exception
	}
}
//Giống