import { Fluvio } from '@fluvio/client-capacitor';

// Created from `fluvio profile export > fluvio-profile.json`
import fluvioProfile from './fluvio-profile.json';

const FLUVIO_TOPIC = "cap-example";

let fluvioClient;

Fluvio.connect(fluvioProfile).then(
  client => {
    console.info(`Connected to Fluvio: ${JSON.stringify(client)}`);
    fluvioClient = client;
  },
  err => {
    console.error(`Error connecting to Fluvio: ${JSON.stringify(err)}`);
  },
);

let produceForm = document.querySelector('form');

produceForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!fluvioClient) {
    console.error("Not connected to Fluvio");
    return;
  }

  let formData = new FormData(produceForm);

  let produceValue = formData.get("produceValue");

  fluvioClient.produce(FLUVIO_TOPIC, produceValue).then(
    _ => {
      console.info(`Produced "${produceValue}" to ${FLUVIO_TOPIC}`);
      alert(`Produced "${produceValue}" to ${FLUVIO_TOPIC}`);
    },
    err => {
      console.error(`Error producing to Fluvio: ${JSON.stringify(err)}`);
    },
  );
});
