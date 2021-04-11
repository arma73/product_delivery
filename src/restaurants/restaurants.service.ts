import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, UpdateResult } from "typeorm";
import { CreateRestaurantDTO } from "./dtos/createRestaurant.dto";
import { UpdateRestaurantDTO } from "./dtos/updateRestaurant.dto";
import { Restaurant } from "./entities/restaurant.entity";

@Injectable()
export class RestaurantService {
    constructor(
        @InjectRepository(Restaurant)
        private readonly restaurants: Repository<Restaurant>
    ) {}

    getAll(): Promise<Restaurant[]> {
        return this.restaurants.find();
    }

    createRestaurant(
        createRestaurantDTO: CreateRestaurantDTO
    ): Promise<Restaurant> {
        const newRestaurant = this.restaurants.create(createRestaurantDTO);
        return this.restaurants.save(newRestaurant);
    }

    updateRestaurant({ id, data }: UpdateRestaurantDTO): Promise<UpdateResult> {
        return this.restaurants.update(id, { ...data });
    }
}
