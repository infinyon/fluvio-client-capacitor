import { registerPlugin } from '@capacitor/core';

import type { FluvioPlugin, Profile as FluvioProfile } from './definitions';

const fluvioNative = registerPlugin<FluvioPlugin>('Fluvio');

class Fluvio {
  static async connect(profile: FluvioProfile) : Promise<FluvioClient> {
    let { clientId } = await fluvioNative.connect(profile);
    return new FluvioClient(clientId)
  }
}

class FluvioClient {
  id: number;
  constructor(clientId: number) {
    this.id = clientId;
  }

  async produce(topic: string, value: string): Promise<void> {
    return await fluvioNative.produce({
      clientId: this.id,
      topic,
      value
    })
  }
}

export { Fluvio, FluvioProfile, FluvioClient };
