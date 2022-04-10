import { UserController } from './user.controller';
import { Module } from "@nestjs/common";
import { UserService } from 'src/services/user.service';

@Module({
	imports: [],
	providers: [UserService],
	controllers: [UserController]
})

export class AdminModule { }