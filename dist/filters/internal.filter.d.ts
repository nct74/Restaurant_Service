import { InternalServerErrorException } from "@nestjs/common";
import { ExceptionFilter, ArgumentsHost } from "@nestjs/common";
export declare class InternalServerErrorFilter implements ExceptionFilter {
    catch(exception: InternalServerErrorException, host: ArgumentsHost): void;
}
