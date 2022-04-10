import { UserController } from './user.controller';
import { Module } from "@nestjs/common";
import { UserService } from 'src/services/user.service';
import { User } from 'src/models/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [TypeOrmModule.forFeature([User])],
	providers: [UserService],
	controllers: [UserController]
})

export class AdminModule { }