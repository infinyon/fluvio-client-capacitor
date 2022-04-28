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

<docgen-index>

* [`connect(...)`](#connect)
* [`produce(...)`](#produce)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### connect(...)

```typescript
connect(profile: Profile) => Promise<Client>
```

| Param         | Type                                        |
| ------------- | ------------------------------------------- |
| **`profile`** | <code><a href="#profile">Profile</a></code> |

**Returns:** <code>Promise&lt;<a href="#client">Client</a>&gt;</code>

--------------------


### produce(...)

```typescript
produce(options: ProduceOpts) => Promise<void>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#produceopts">ProduceOpts</a></code> |

--------------------


### Interfaces


#### Client

| Prop           | Type                |
| -------------- | ------------------- |
| **`clientId`** | <code>number</code> |


#### Profile

| Prop           | Type                                              |
| -------------- | ------------------------------------------------- |
| **`endpoint`** | <code>string</code>                               |
| **`tls`**      | <code><a href="#profiletls">ProfileTls</a></code> |


#### ProfileTls

| Prop          | Type                |
| ------------- | ------------------- |
| **`policy`**  | <code>string</code> |
| **`domain`**  | <code>string</code> |
| **`key`**     | <code>string</code> |
| **`cert`**    | <code>string</code> |
| **`ca_cert`** | <code>string</code> |


#### ProduceOpts

| Prop           | Type                |
| -------------- | ------------------- |
| **`clientId`** | <code>number</code> |
| **`topic`**    | <code>string</code> |
| **`value`**    | <code>string</code> |

</docgen-api>
