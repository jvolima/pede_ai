import { AppError } from "../errors/AppError";
import { prisma } from "../prisma";

export interface Restaurant{
    id?: string; 
    name: string; 
    cnpj: string;
    isAproved?: boolean;
}

export class CreateRestaurantModel{
    async newRestaurant(data: Restaurant){
        
        const cnpjAlreadyExist = await prisma.restaurant.findUnique({
            where: {
                cnpj: data.cnpj.trim()
            }
        });

        if(data.name.trim() === ""){
            throw new AppError('Invalid name');
        }

        if(data.cnpj.trim() === ""){
            throw new AppError('Invalid cnpj');
        }

        if(cnpjAlreadyExist){
            throw new AppError('Restaurant with this cnpj already exists');
        }

        const restaurant = await prisma.restaurant.create({
            data: {
                name: data.name.trim(),
                cnpj: data.cnpj.trim(),
                isAproved: data.isAproved,
            }
    });
    return restaurant;
    }
}
