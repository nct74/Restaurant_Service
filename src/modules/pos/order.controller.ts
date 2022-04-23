
import { DishService } from "src/services/dish.service";
import { Controller, Get, Render, Post, Body, Res, UseGuards, Req } from "@nestjs/common";
@Controller("order")
export class OrderController {
	constructor(private dishService : DishService) { }
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
        console.log(arrid);
        console.log(arrquan);
    }
}