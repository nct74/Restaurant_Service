import { Contain } from 'src/models/contain.entity';
import { Order } from 'src/models/order.entity';

import { DishService } from "src/services/dish.service";
import { Controller, Get, Render, Post, Body, Res, UseGuards, Req } from "@nestjs/common";
import { OrderService } from "src/services/order.service";
import { ContainService } from 'src/services/contain.service';


@Controller("order")
export class OrderController {
    constructor(private dishService: DishService, private orderService: OrderService, private containService: ContainService) { }
    @Get()
    @Render("pos/orderpage")
    async index() {
        var list = await this.dishService.typeofDish();
        var allofdata = await this.dishService.getAll();
        var a = list[0];
        var b = list[1];
        var c = list[2];

        for (var i = 0; i < 3; i++) {
            list.shift();
        }
        // console.log(a);console.log(b);console.log(c);console.log(d);
        const viewBag = {
            data1: a,
            data2: b,
            data3: c,
            data: list,
            allofdata: allofdata

        }
        return viewBag;
    }
    @Post('/getalldish')
    async getAll(@Body('ma') ma: string) {
        if (ma == "All of dish") {
            var list = await this.dishService.getAll();
        }
        else
            var list = await this.dishService.getdishofftype(ma);
        // console.log(ma);
        const viewBag = {
            data: list
        }
        return viewBag;
    }
    @Post('/addOrder')
    async addOrder(@Body('arrid') arrid: Array<number>, @Body('arrquan') arrquan: Array<number>, @Body('total') total: number) {
        // create new Order
        // ADD data in contain
        // => go to page payment
        var newOrder = new Order();
        newOrder.total = total;
        newOrder.id = Math.floor(1000000 + Math.random() * 9000000);
        var getbyID = await this.orderService.getByOrderId(newOrder.id);
        while (getbyID) {
            newOrder.id = Math.floor(1000000 + Math.random() * 9000000);
            getbyID = await this.orderService.getByOrderId(newOrder.id);
        }
        await this.orderService.add(newOrder);
        for (var i = 0; i < arrid.length; i++) {
            await this.containService.addnewcontain(newOrder.id, arrid[i], arrquan[i]);
        }

        return newOrder.id;
    }
}