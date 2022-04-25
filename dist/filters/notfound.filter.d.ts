import { NotFoundException } from "@nestjs/common";
import { ExceptionFilter, ArgumentsHost } from "@nestjs/common";
export declare class NotFoundFilter implements ExceptionFilter {
    catch(exception: NotFoundException, host: ArgumentsHost): void;
}
