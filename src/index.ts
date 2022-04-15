import { registerPlugin } from '@capacitor/core';

import type { FluvioPlugin } from './definitions';

const Fluvio = registerPlugin<FluvioPlugin>('Fluvio', {
  web: () => import('./web').then(m => new m.FluvioWeb()),
});

export * from './definitions';
export { Fluvio };
