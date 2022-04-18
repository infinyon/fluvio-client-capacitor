import { registerPlugin } from '@capacitor/core';
const Fluvio = registerPlugin('Fluvio', {
    web: () => import('./web').then(m => new m.FluvioWeb()),
});
export * from './definitions';
export { Fluvio };
//# sourceMappingURL=index.js.map