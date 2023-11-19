import { BadRequestException, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cat } from 'src/interfaces/cat.interface';
import { StoreService } from 'src/store/store.service';

interface EnvVariable {
    DATABASE_USER: string
}

@Injectable()
export class CatsService {
    constructor(
        private storeService: StoreService,
        @Inject('DATA_CONFIG') private readonly config: any,
        private readonly configService: ConfigService
    ) {
    }

    private readonly cats: Cat[] = [];

    public async findOneCatById(): Promise<Cat> {
        return Promise.resolve({
            name: 'Cate'
        });
    }
    createCat(cat: Cat) {
        console.log('config', this.config);
        console.log('ENV', this.configService.get('PORT'));
        this.storeService.save(cat);
    }

    getAllCats(): Cat[] {
        return this.cats;
    }

    throwErrorCustom() {
        throw new Error('hahah')
        
        // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
}
