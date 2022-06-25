import { request, response } from "express";
import { CreateRestaurantModel } from "../models/CreateRestaurantModel";

export class CreateRestaurantController{
    async handle(Request: Request, Response: Response){
        const {name, cnpj} = request.body;

        const createRestaurantModel = new CreateRestaurantModel(); 

        const data = {
            name,
            cnpj
        };
       
        const restaurant = await CreateRestaurantModel.newRestaurant(data);
    }
}
