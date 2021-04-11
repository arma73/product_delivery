import { Field, InputType, PartialType } from "@nestjs/graphql";
import { CreateRestaurantDTO } from "./createRestaurant.dto";

@InputType()
class UpdateRestaurantInputType extends PartialType(CreateRestaurantDTO) {}

@InputType()
export class UpdateRestaurantDTO {
    @Field(type => Number)
    id: number;

    @Field(type => UpdateRestaurantInputType)
    data: UpdateRestaurantInputType;
}
