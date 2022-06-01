<h1 align="center">Fluvio Capacitor Plugin</h1>

This project is a mobile app plugin written in HTML/JS/CSS with [Capacitor](https://capacitorjs.com) that shows you how to connect mobile devices with Fluvio. Connecting your mobile devices directly to a Fluvio cluster without an intermediary backend server reduces latency and the load on other backend services.

## What is Fluvio?

[Fluvio](https://www.fluvio.io/) is an end-to-end distributed data streaming platform that makes it easy to build and run real-time applications. With Fluvio, you can ingest, transform, and dispatch large volumes of events from your mobile devices to backend servers. It connects your devices from edge to core, removing the complexity of building and scaling your middle tier.

## Who should use this?

Anyone who is building native mobile applications with a low tolerance for latency. For example:
*  track cars, trucks, or buses on a map
*  monitor stocks and send alerts
*  compute gaming stats
*  collect health monitoring data
*  monitoring traffic conditions
*  etc.

<img width="1204" alt="Fluvio-capacitor" src="https://user-images.githubusercontent.com/26554085/171305848-66a246e1-9615-46b1-b55a-b0f1a7eab5cc.png">

## Prerequisites

1. Clone this project

    ```bash
    git clone git@github.com:infinyon/fluvio-client-capacitor.git
    ```

2. Install Capacitor

    Your computer must have [Capacitor](https://capacitorjs.com/docs) installed with an `IOS runtime`. Checkout the [Capacitor iOS Documentation](https://capacitorjs.com/docs/ios) for additional instructions.


## Setup Fluvio

1. Install Fluvio client:
    
    [Download Fluvio](https://www.fluvio.io/download/) client to your local machine.

2. Provision a Fluvio cluster:

    [Infinyon Cloud](https://infinyon.cloud/) - create free account and provision a cluster.


## Run the Example App

The Sample App in the [example directory](./example) to demonstrate Fluvio capatibities.

1. In the terminal, open the example directory

    ```bash
    cd example
    ```

2. Use Fluvio CLI to login to Fluvio Cloud

    ```bash
    fluvio cloud login
    ```

3. Download your fluvio profile in the `www` directory. This file contains your security profile that allows mobiles devices to connect to InfinyOn cloud.

    ```bash
    fluvio profile export > www/fluvio-profile.json
    ```

4. Create topic in fluvio

    ```bash
    fluvio topic create cap-example
    ```

5. Build the Sample App

    ```bash
    npm install && npm run build
    ```

6. Sync to native projects

    ```bash
    npx cap sync
    ```

6. (iOS) Open XCode to deploy to simulator

    ```bash
    npx cap open ios
    ```

Congratulations! Your enviornment is up and running. Use the GUI to send some records and read from the consumer in the CLI.



## Integrate Fluvio into your own Capacitor App

1. Use `npm` to install the Fluvio capacitor client in your own app:

    ```bash
    npm install --save https://github.com/infinyon/fluvio-client-capacitor/releases/latest/download/fluvio-client-capacitor.tgz
    ```

2. Sample code to produce records

    ```javascript
    import { FluvioClient } from '@fluvio/client-capacitor';
    import fluvioProfile from './fluvio-profile.json';

    const FLUVIO_TOPIC = 'cap-example';

    async function example() {    
        let fluvioClient = await FluvioClient.connect(fluvioProfile);
        await fluvioClient.produce(FLUVIO_TOPIC, "example value");
    }
    ```


## APIs

### FluvioClient

#### Methods

- `static` **connect**(`profile`: [Profile](#Profile)): `Promise`<[`FluvioClient`](#FluvioClient)\>

- **produce**(topic: `String`, value: `String`): `Promise`<`void`\>


### FluvioProfile

#### Properties

- endpoint: `string`
- tls: [`FluvioProfileTls`](#FluvioProfileTls)


### FluvioProfileTls

#### Properties

- policy: `string`
- domain: `string`
- key: `string`
- cert: `string`
- ca_cert: `string`


## References 
* [Capacitor Documentation](https://capacitorjs.com/docs)
* [Fluvio Documentation](https://fluvio.io/docs)


## Limitations

This project is currently under development and we are seeking help from the community on the following features:
* [support for consummers](https://github.com/infinyon/fluvio-client-capacitor/issues/1)
* [support for Android](https://github.com/infinyon/fluvio-client-capacitor/issues/2)

Join our community on [Discord](https://discordapp.com/invite/bBG2dTz) and let's build the future of data streaming together.
