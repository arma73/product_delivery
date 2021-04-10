import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { CreateRestaurantDTO } from "./dtos/createRestaurant.dto";
import { Restaurant } from "./entities/restaurant.entity";
import { RestaurantService } from "./restaurants.service";

@Resolver(of => Restaurant)
export class RestaurantResolver {
    constructor(private readonly restaurantService: RestaurantService) {}

    @Query(returns => [Restaurant])
    restaurants(): Promise<Restaurant[]> {
        return this.restaurantService.getAll();
    }

    @Mutation(returns => Boolean)
    createRestaurant(
        @Args() createRestaurantDTO: CreateRestaurantDTO
    ): boolean {
        return true;
    }
}
