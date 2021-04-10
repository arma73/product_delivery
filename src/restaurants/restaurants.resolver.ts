import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { CreateRestaurantDTO } from "./dtos/createRestaurant.dto";
import { Restaurant } from "./entities/restaurant.entity";

@Resolver(of => Restaurant)
export class RestaurantResolver {
    @Query(returns => [Restaurant])
    restaurants(@Args("veganOnly") veganOnly: boolean): Restaurant[] {
        return [];
    }

    @Mutation(returns => Boolean)
    createRestaurant(
        @Args() createRestaurantDTO: CreateRestaurantDTO
    ): boolean {
        return true;
    }
}
