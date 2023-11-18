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


@Module({
    imports: [CatsModule],
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
