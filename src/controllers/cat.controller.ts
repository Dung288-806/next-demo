import { Controller, Get, Inject, Post, Req, Res, UseFilters } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
// import { HttpExceptionFilter } from 'src/http-exception';
import { Cat } from 'src/interfaces/cat.interface';
import { CatsService } from '../services/cat.service';

@Controller('cat')
// @UseFilters(new HttpExceptionFilter()) // handle Error for Controller-Scoped
export class CatsController {
    // constructor(protected readonly catsService: CatsService) {}
    constructor(@Inject('CAT_SERVICE') private readonly catsService: CatsService) {

    }

    @Post('')
    createCat(@Req() req: Request, res: Response, next: NextFunction) {        
        return this.catsService.createCat(req.body);
    }

    @Get('/all')
    getAllCats(): Cat[] {
        return this.catsService.getAllCats();
    }

    @Get('/error')
    throwErrorCustom() {
        this.catsService.throwErrorCustom()
    }

    @Get(':id')
    async getOnCat(@Req() req: Request, @Res() res: Response) {        
        const cat = await this.catsService.findOneCatById();
        return res.json(cat);
    };
}
