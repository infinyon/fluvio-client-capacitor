import { WebPlugin } from '@capacitor/core';
import type { FluvioPlugin } from './definitions';
export declare class FluvioWeb extends WebPlugin implements FluvioPlugin {
    connect(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
