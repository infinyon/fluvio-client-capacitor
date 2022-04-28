import { registerPlugin } from '@capacitor/core';

import type { FluvioPlugin, Profile as FluvioProfile } from './definitions';

const fluvioNative = registerPlugin<FluvioPlugin>('Fluvio');

class FluvioClient {
  id: number;
  
  static async connect(profile: FluvioProfile): Promise<FluvioClient> {
    const { clientId } = await fluvioNative.connect(profile);
    return new FluvioClient(clientId);
  }

  constructor(clientId: number) {
    this.id = clientId;
  }

  async produce(topic: string, value: string): Promise<void> {
    return await fluvioNative.produce({
      clientId: this.id,
      topic,
      value,
    });
  }
}

export { FluvioProfile, FluvioClient };
