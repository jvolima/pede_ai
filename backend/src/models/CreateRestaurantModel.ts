import { prisma } from "../prisma";
// importar os erros tmb

export interface Restaurant{
    id?: number; // lembrar de perguntar pro jao
    name: string; 
    cnpj: string; // lembrar de perguntar da logo pro jao
    isAproved?: boolean;
}

export class CreateRestaurantModel{
    async newRestaurant(data: Restaurant){
        const restaurant = await prisma.client.create({
            data: {
                name: data.name,
                cnpj: data.cnpj,
                isAproved: data.isAproved,
            }
    });
    return restaurant;
    }
}
