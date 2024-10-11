import { Global, Module } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Global()
@Module({
    providers:[
        {
            provide:'UUID',
            useValue:randomUUID
        }
    ],
    exports:['UUID']
})
export class CommonModule {}
