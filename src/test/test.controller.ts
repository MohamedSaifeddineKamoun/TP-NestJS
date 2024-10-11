import { Controller, Get, Inject } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';

@Controller('test')
export class TestController {
    constructor (
        @Inject('UUID') private readonly uuid: () => string
    ){}

    @Get('/uuid')
    getUUID() : string {
        return this.uuid();
    }
}
