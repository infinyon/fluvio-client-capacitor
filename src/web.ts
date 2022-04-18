import { WebPlugin } from '@capacitor/core';

import type { FluvioPlugin } from './definitions';

export class FluvioWeb extends WebPlugin implements FluvioPlugin {
  async produce(options: { value: string; }): Promise<{ value: string; }> {
    throw new Error('Method not implemented.');
  }
  async connect(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
