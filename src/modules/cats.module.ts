import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { StoreModule } from 'src/store/store.module';
import { CatsController } from '../controllers/cat.controller';
import { CatsService } from '../services/cat.service';

@Module({
    controllers: [CatsController],
    providers: [
        {
            provide: 'CAT_SERVICE',
            useClass: CatsService
        },
        {
            provide: 'DATA_CONFIG',
            useValue: {
                connection: 'this is my connection of DB',
                userName: 'dev',
                password: 'dev123'
            }
        }
    ],
    imports: [
        StoreModule.register({
            dirname: 'Store',
            fileName: 'data.json'
        }),
        // ConfigModule
    ]
})
export class CatsModule {}
