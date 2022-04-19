import { WebPlugin } from '@capacitor/core';
import type { FluvioPlugin } from './definitions';
export declare class FluvioWeb extends WebPlugin implements FluvioPlugin {
    produce(_options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    connect(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
