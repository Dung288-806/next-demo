import { DynamicModule } from "@nestjs/common";

const { Injectable } = require("@nestjs/common");

@Injectable()
export class StoreService {

    static register(): DynamicModule {
        return {
            module: StoreService,
            providers: 
        }
    }

    save(params: any) {
        console.log('save', params);
    }
}