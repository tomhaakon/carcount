<template></template>
<script setup>
import { createCanvas, loadImage } from "canvas";
import * as tf from "@tensorflow/tfjs";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
// import "@tensorflow/tfjs-node";
// const cocoSsd = require("@tensorflow-models/coco-ssd");

// (async () => {
//   // Create a canvas element using the 'canvas' library.
//   const canvas = createCanvas(800, 600);
//   const context = canvas.getContext("2d");

//   // Load the image using 'canvas' library.
//   const img = await loadImage("path/to/your/image.jpg");

//   // Set the image as the canvas content.
//   context.drawImage(img, 0, 0);

//   // Load the model.
//   const model = await cocoSsd.load();

//   // Classify the image.
//   const predictions = await model.detect(canvas);

//   console.log("Predictions: ");
//   console.log(predictions);
// })();
</script>
