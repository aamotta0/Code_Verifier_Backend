import { BasicResponse } from './types';
import { IHelloController } from './interface';
import { LogSuccess } from '@/utils/logger';

export class HelloController implements IHelloController {
    getMessage(name?: string): Promise<BasicResponse> {
        LogSuccess('[/api/hello] Get Request');

        return {
            message: `Hello, ${name || 'World'}`
        }
    }
}


