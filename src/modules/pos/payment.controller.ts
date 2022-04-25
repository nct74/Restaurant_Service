
import { DishService } from "src/services/dish.service";
import { Controller, Get, Render, Post, Body, Res, UseGuards, Req } from "@nestjs/common";
import { PaymentService } from "src/services/payment.service";
import { Payment } from "src/models/payment.entity";
import { Response } from 'express';
import { OrderService } from "src/services/order.service";
@Controller("payment")
export class PaymentController {
    constructor( private paymentService: PaymentService , private orderService : OrderService ) { }
    @Get()
	@Render("pos/payment")
	async index() {
    }
    @Post('/addpayment')
    async getAll(@Body() data: any,@Res() res: Response) {
        console.log(data.orderId);
        var newPayment = new Payment();
        newPayment.order =data.orderId;
        newPayment.method = "1";
        newPayment.status	 = true;
        var getbyID = await this.orderService.getByOrderId(data.orderId);
        if(getbyID) {
            await this.paymentService.add(newPayment);
            return res.redirect("/paymentss");
        }
        else{
            return res.redirect("/paymentfail");
        }


    }
}