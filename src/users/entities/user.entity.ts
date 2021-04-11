import { CoreEntity } from "../../common/entities/core.entity";
import { Column, Entity } from "typeorm";
import { Field, InputType, ObjectType } from "@nestjs/graphql";

type UserRole = "client" | "owner" | "delivery";

@InputType({ "isAbstract": true })
@ObjectType()
@Entity()
export class User extends CoreEntity {
    @Field(type => String)
    @Column()
    email: string;

    @Field(type => String)
    @Column()
    password: string;

    @Field(type => String)
    @Column()
    role: UserRole;
}
