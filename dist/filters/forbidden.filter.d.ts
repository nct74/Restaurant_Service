import { ForbiddenException } from "@nestjs/common";
import { ExceptionFilter, ArgumentsHost } from "@nestjs/common";
export declare class ForbiddenFilter implements ExceptionFilter {
    catch(exception: ForbiddenException, host: ArgumentsHost): void;
}
