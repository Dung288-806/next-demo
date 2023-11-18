import { BadRequestException, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Cat } from 'src/interfaces/cat.interface';
import { StoreService } from 'src/store/store.service';

@Injectable()
export class CatsService {
    constructor(private storeService: StoreService, @Inject('DATA_CONFIG') private readonly config: any){}

    private readonly cats: Cat[] = [];

    public async findOneCatById(): Promise<Cat> {
        return Promise.resolve({
            name: 'Cate'
        });
    }

    createCat(cat: Cat) {
        console.log('config', this.config);
        
        this.storeService.save(cat);
    }

    getAllCats(): Cat[] {
        return this.cats;
    }

    throwErrorCustom() {
        throw new Error('hahah')
        
        throw new BadRequestException('some', { cause: 'aa', description: 'not found'})
        // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
}
