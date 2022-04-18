import { WebPlugin } from '@capacitor/core';
export class FluvioWeb extends WebPlugin {
    async connect(options) {
        console.log('ECHO', options);
        return options;
    }
}
//# sourceMappingURL=web.js.map