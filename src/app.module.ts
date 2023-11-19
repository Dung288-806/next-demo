import {
    MiddlewareConsumer,
    Module,
    NestModule,
    RequestMethod
} from '@nestjs/common';
import { CatsModule } from './modules/cats.module';
import { Logger } from './middlewares/logger.middleware';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './http-exception';
import { ConfigModule } from '@nestjs/config';
import { validate } from './configs/env.validation';


@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
            cache: true,
            validate,
        }),
        CatsModule
    ],
    providers: [
        {
            provide: APP_FILTER,
            useClass: AllExceptionsFilter
        }
    ]
})
export class AppModule implements NestModule {
    async configure(consumer: MiddlewareConsumer) {
        await Promise.resolve(1);
        consumer
            .apply(Logger)
            .exclude({ path: 'cat/:id', method: RequestMethod.ALL })
            .forRoutes('cat');
    }
}
