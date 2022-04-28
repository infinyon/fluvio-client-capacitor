# Fluvio Client Capacitor Plugin

Capacitor Plugin using Fluvio client for iOS


## Purpose

This plugin allows your [Capacitor](https://capacitorjs.com) app to connect directly to a Fluvio cluster without the need for a backend. Under the hood this uses [fluvio-client-swift](https://github.com/infinyon/fluvio-client-swift/) for iOS.


## Who should use this

This plugin is for building mobile apps written in HTML/JS/CSS with Capacitor. Connecting and producing data directly to Fluvio lowers latency and reduces load on other backend services. This is ideal for high thoughput, real-time applications.


## Install

```bash
npm install --save fluvio-client-capacitor
npx cap sync
```


## Configure Fluvio profile

### Obtain Fluvio credentials with Fluvio CLI

#### Using Infinyon

```bash
fluvio cloud login
```

### Export Fluvio profile

```bash
fluvio profile export > <path to your web source>/fluvio-profile.json
```


## Full Example

See [Example](example/www/main.js)


## API

### FluvioClient

#### Methods

- `Static` **connect**(`profile`: [Profile](#Profile)): `Promise`<[`FluvioClient`](#FluvioClient)\>

- **produce**(`topic`: `String`, `value`: `String`): `Promise`<`void`\>


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