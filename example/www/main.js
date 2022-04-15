import { Fluvio } from '@fluvio/client-capacitor';

// const fluvio = FluvioClient.connect();
Fluvio.connect({ value: "hi"}).then((fluvio) => {

    console.log(fluvio);
    console.log(Fluvio);
    
    alert("echo" + JSON.stringify(fluvio));
});