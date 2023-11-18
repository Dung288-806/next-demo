import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter, HttpExceptionFilter } from './http-exception';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use((req: any, res: any, next: any) => {
        console.log('helloe');
        next();
    });
    // app.useGlobalFilters(new HttpExceptionFilter()); // handle error for global-scope
    // const { httpAdapter } = app.get(HttpAdapterHost);
    // app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
    await app.listen(3000);
}
bootstrap();
