import { WebPlugin } from '@capacitor/core';
export class FluvioWeb extends WebPlugin {
    async produce(_options) {
        throw new Error('Method not implemented.');
    }
    async connect(options) {
        console.log('ECHO', options);
        return options;
    }
}
//# sourceMappingURL=web.js.map