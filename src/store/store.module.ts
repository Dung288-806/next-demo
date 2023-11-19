import { DynamicModule, Module } from "@nestjs/common";
import { StoreService } from "./store.service";

export interface Config {
    dirname: string,
    fileName: string
}

@Module({
    providers: [StoreService],
    exports: [StoreService]
})
export class StoreModule {
    static register(config: Config): DynamicModule {
        return {
            module: StoreModule,
            providers: [
                {
                    provide: 'DATA_CONFIG',
                    useValue: config
                }
            ],
        }
    }
}