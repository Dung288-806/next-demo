import { Inject } from "@nestjs/common";
import * as fs from 'fs';
import { Config } from "./store.module";
const { Injectable } = require("@nestjs/common");

@Injectable()
export class StoreService {

    constructor(@Inject('DATA_CONFIG') private readonly config: Config) {
    }

    save(params: any) {
        console.log('save', params, this.config);
        // fs.writeFileSync(`${this.config.dirname}/${this.config.fileName}`, JSON.stringify(params));
    }
}