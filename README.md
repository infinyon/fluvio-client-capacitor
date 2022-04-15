<h1 align="center">Fluvio Capacitor Plugin</h1>
<p align="center">Fluvio client for Capacitor Apps</p>

## What is Fluvio?

[Fluvio](https://www.fluvio.io/) is a high-performance distributed data streaming platform built to make it easy to run real-time applications.

## Who should use this

This plugin is for use with mobile apps written in HTML/JS/CSS with [Capacitor](https://capacitorjs.com). Connecting and producing data directly to Fluvio lowers latency and reduces load on other backend services. This is ideal for high thoughput, real-time applications.

Using this plugin allows your app to connect directly to a Fluvio cluster without the need for a backend. Under the hood this uses [fluvio-client-swift](https://github.com/infinyon/fluvio-client-swift/) for iOS.


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