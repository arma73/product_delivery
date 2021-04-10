import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RestaurantsModule } from "./restaurants/restaurants.module";
import { getEnvFileName } from "./utils/getEnvFileName";

@Module({
    "imports": [
        ConfigModule.forRoot({
            "isGlobal": true,
            "envFilePath": getEnvFileName(),
            "ignoreEnvFile": process.env.NODE_ENV === "production",
        }),
        TypeOrmModule.forRoot({
            "type": "postgres",
            "host": process.env.DB_HOST,
            "port": +process.env.DB_PORT,
            "username": process.env.DB_USER,
            "password": process.env.DB_PASSWORD,
            "database": process.env.DB_NAME,
            "synchronize": true,
            "logging": true,
        }),
        GraphQLModule.forRoot({
            "autoSchemaFile": true,
        }),
        RestaurantsModule,
    ],
    "controllers": [],
    "providers": [],
})
export class AppModule {}
