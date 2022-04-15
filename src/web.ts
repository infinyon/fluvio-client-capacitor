import { WebPlugin } from '@capacitor/core';

import type { FluvioPlugin } from './definitions';

export class FluvioWeb extends WebPlugin implements FluvioPlugin {
  async connect(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
