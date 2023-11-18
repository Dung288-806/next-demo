import { Module } from '@nestjs/common';
import { StoreModule } from 'src/store/store.module';
import { CatsController } from '../controllers/cat.controller';
import { CatsService } from '../services/cat.service';

@Module({
    controllers: [CatsController],
    providers: [{
        provide: 'CAT_SERVICE',
        useClass: CatsService
    }, {
        provide: 'DATA_CONFIG',
        useValue: {
            connection: 'this is my connection of DB',
            userName: 'dev',
            password: 'dev123'
        }
    }],
    // exports: [CatsService],
    imports: [StoreModule]
})
export class CatsModule {}
