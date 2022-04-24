import { Order } from 'src/models/order.entity';

import { DishService } from "src/services/dish.service";
import { Controller, Get, Render, Post, Body, Res, UseGuards, Req } from "@nestjs/common";
import { OrderService } from "src/services/order.service";
import { Contain } from 'src/models/contain.entity';
@Controller("order")
export class OrderController {
	constructor(private dishService : DishService, private orderService : OrderService) { }
	@Get()
	@Render("pos/orderpage")
	async index() {
        var list  =  await this.dishService.typeofDish();
        var allofdata  =  await this.dishService.getAll();
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
            data : list,
            allofdata:allofdata
      
        }
        return viewBag;
	}
    @Post('/getalldish')
    async getAll(@Body('ma') ma: string) {
        if(ma == "All of dish"){
            var list  =  await this.dishService.getAll();
        }
        else 
            var list  =  await this.dishService.getdishofftype(ma);
        // console.log(ma);
        const viewBag= {
            data: list
        }
        return viewBag;
    }
    @Post('/addOrder')
    async addOrder(@Body('arrid') arrid: Array<void>,@Body('arrquan') arrquan: Array<void>) {
        // create new Order
        // ADD data in contain
        // => go to page payment
        var newOrder = new Order();
        newOrder.id =Math.floor(1000000 + Math.random() * 9000000);
        var getbyID = await this.orderService.getByOrderId(newOrder.id);
        while(getbyID){
            newOrder.id = Math.floor(1000000 + Math.random() * 9000000);
            getbyID = await this.orderService.getByOrderId(newOrder.id);
        }
        for(var i = 0 ; i < arrid.length ; i++){
            var newContain = new Contain();
            // newContain.orderId = newOrder.id;
            // newContain.dishId = (arrid[i]);
            await this.orderService.add(newOrder);
        }
        await this.orderService.add(newOrder);    
        console.log(arrid);
        console.log(arrquan);
    }
}