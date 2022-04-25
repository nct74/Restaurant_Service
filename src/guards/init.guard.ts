import { UserRole } from "src/constants/user.constant";
import { Response } from "express";
import { UserStatus } from "src/constants/user.constant";
import { Request } from "express";
import {
	Injectable,
	CanActivate,
	ExecutionContext,
	ForbiddenException,
} from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class InitGuard implements CanActivate {
	canActivate(
		context: ExecutionContext
	): boolean | Promise<boolean> | Observable<boolean> {
		const request: Request = context.switchToHttp().getRequest();
		const response: Response = context.switchToHttp().getResponse();
		console.log(request.user["init"]);
		if (request.user["init"] === UserStatus.UNINITIALZED) {
			throw new ForbiddenException("Uninitialized user");
		}
		response.locals["user"] = request.user;
		response.locals["UserRole"] = UserRole;
		return true;
	}
}

//File này đê xài user.role ở layout (=> if else ADMIN || LIBRARIAN để show cái taskbar), nhưng layout không phải render mà code bằng html không có data đổ ra nên chưa làm được