import { prisma } from "../prisma";
// importar os erros tmb

export interface Restaurant{
    id?: string; 
    name: string; 
    cnpj: string;
    isAproved?: boolean;
}

export class CreateRestaurantModel{
    async newRestaurant(data: Restaurant){
        

        const restaurant = await prisma.restaurant.create({
            data: {
                name: data.name,
                cnpj: data.cnpj,
                isAproved: data.isAproved,
            }
    });
    return restaurant;
    }
}
