<h1 align="center">Fluvio Capacitor Plugin</h1>

This project is a mobile app plugin written in HTML/JS/CSS with [Capacitor](https://capacitorjs.com) that shows you how to connect mobile devices with Fluvio. Producing and consuming data directly to and from Fluvio lowers latency and reduces the load on other backend services. 

This plugin allows your app to connect directly to a Fluvio cluster without an intermediary backend server. Under the hood, this project uses [fluvio-client-swift](https://github.com/infinyon/fluvio-client-swift/) for iOS.

## What is Fluvio?

[Fluvio](https://www.fluvio.io/) is a high-performance distributed data streaming platform built to make it easy to build and run real-time applications. With Fluvio, you can ingest, transform, and dispatch large volumes of events between from your mobile devices to backend servers. 

## Who should use this?

Anyone building a native mobile applications with low tolerance for latency. For example:
*  track cars, tucks, or buses on a map
*  track stocks and send notifications.
*  provide location services
*  compute gaming stats
*  collect health information (heart monitoring, breathing, etc)
*  monitoring traffic conditions
*  etc.


## Example

Clone this repo and follow the [Readme](example/README.md) in the `example` directory to see it in action.


## Get started

If you haven't already started building your app with Capacitor, follow the [Capacitor Documentation](https://capacitorjs.com/docs) to create an app.

You will need a Fluvio cluster, you can create one for free on [Infinyon Cloud](https://infinyon.cloud/).


## Install

```bash
npm install --save https://github.com/infinyon/fluvio-client-capacitor/releases/download/v0.0.2/fluvio-client-capacitor.tgz
npx cap sync
```

## Configure Fluvio profile

### Obtain Fluvio credentials with Fluvio CLI

#### Using Infinyon Cloud

Once you have an Infinyon Cloud account, you can login with the Fluvio CLI.

```bash
fluvio cloud login
```

### Export Fluvio profile

```bash
fluvio profile export > <path to your web source>/fluvio-profile.json
```


## Example Usage

```javascript
import { FluvioClient } from '@fluvio/client-capacitor';
import fluvioProfile from './fluvio-profile.json';

const FLUVIO_TOPIC = 'cap-example';

async function example() {    
    let fluvioClient = await FluvioClient.connect(fluvioProfile);
    await fluvioClient.produce(FLUVIO_TOPIC, "example value");
}
```


## API

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

### Limitations

This project is currently under development and lacks support for the following features:
* incoming traffic (consumers)
* Android devices

We are seeking help from the community to accelerate development. Please join our [Discord](https://discordapp.com/invite/bBG2dTz) channel and join us on this effort.
