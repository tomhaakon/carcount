<template>
  <div>
    <h1>Multiple object detection using pre-trained model in TensorFlow.js</h1>
    <br />

    <p>
      Wait for the model to load before clicking the button to enable the webcam
      - at which point it will become visible to use.
    </p>
    <br />

    <section id="demos" v-if="getUserMediaSupported">
      <p>
        Hold some objects up close to your webcam to get a real-time
        classification! When ready click "enable webcam" below and accept access
        to the webcam when the browser asks (check the top left of your window)
      </p>
      <br />

      <div id="liveView" class="camView">
        <button id="webcamButton" @click="enableCam" v-if="!webcamEnabled">
          Enable Webcam
        </button>
        <video ref="webcam" autoplay muted width="640" height="480"></video>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import cocoSsd from "@tensorflow-models/coco-ssd";

const webcamEnabled = ref(false);
const webcam = ref(null); // Create a reactive reference

let model = undefined; // Pretend model has loaded so we can try out the webcam code.

// Check if webcam access is supported.
function getUserMediaSupported() {
  console.log("have cam");
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

// Enable the live webcam view and start classification.
function enableCam() {
  const enableWebcamButton = document.getElementById("webcamButton");

  if (!model) {
    return;
  }
  // Hide the button once clicked.
  enableWebcamButton.classList.add("removed");
  // getUsermedia parameters to force video but not audio.
  const constraints = {
    video: true,
  };

  navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
    webcam.value.srcObject = stream;
    webcam.value.addEventListener("loadeddata", predictWebcam);
    webcamEnabled.value = true;
  });
}

// Placeholder function for next step.

onMounted(() => {
  // Your mounted logic here
});
// Store the resulting model in the global scope of our app.

// Before we can use COCO-SSD class we must wait for it to finish
// loading. Machine Learning models can be large and take a moment
// to get everything needed to run.
// Note: cocoSsd is an external object loaded from our index.html
// script tag import so ignore any warning in Glitch.
cocoSsd.load().then(function (loadedModel) {
  model = loadedModel;
  // Show demo section now model is ready to use.
  demosSection.classList.remove("invisible");
});
var children = [];

function predictWebcam() {
  // Now let's start classifying a frame in the stream.
  model.detect(video).then(function (predictions) {
    // Remove any highlighting we did previous frame.
    for (let i = 0; i < children.length; i++) {
      liveView.removeChild(children[i]);
    }
    children.splice(0);

    // Now lets loop through predictions and draw them to the live view if
    // they have a high confidence score.
    for (let n = 0; n < predictions.length; n++) {
      // If we are over 66% sure we are sure we classified it right, draw it!
      if (predictions[n].score > 0.66) {
        const p = document.createElement("p");
        p.innerText =
          predictions[n].class +
          " - with " +
          Math.round(parseFloat(predictions[n].score) * 100) +
          "% confidence.";
        p.style =
          "margin-left: " +
          predictions[n].bbox[0] +
          "px; margin-top: " +
          (predictions[n].bbox[1] - 10) +
          "px; width: " +
          (predictions[n].bbox[2] - 10) +
          "px; top: 0; left: 0;";

        const highlighter = document.createElement("div");
        highlighter.setAttribute("class", "highlighter");
        highlighter.style =
          "left: " +
          predictions[n].bbox[0] +
          "px; top: " +
          predictions[n].bbox[1] +
          "px; width: " +
          predictions[n].bbox[2] +
          "px; height: " +
          predictions[n].bbox[3] +
          "px;";

        liveView.appendChild(highlighter);
        liveView.appendChild(p);
        children.push(highlighter);
        children.push(p);
      }
    }

    // Call this function again to keep predicting when the browser is ready.
    window.requestAnimationFrame(predictWebcam);
  });
}
</script>
<style scoped>
body {
  font-family: helvetica, arial, sans-serif;
  margin: 2em;
  color: #3d3d3d;
}

h1 {
  font-style: italic;
  color: #ff6f00;
}

video {
  display: block;
}

section {
  opacity: 1;
  transition: opacity 500ms ease-in-out;
}
.removed {
  display: none;
}

.invisible {
  opacity: 0.2;
}

.camView {
  position: relative;
  float: left;
  width: calc(100% - 20px);
  margin: 10px;
  cursor: pointer;
}

.camView p {
  position: absolute;
  padding: 5px;
  background-color: rgba(255, 111, 0, 0.85);
  color: #fff;
  border: 1px dashed rgba(255, 255, 255, 0.7);
  z-index: 2;
  font-size: 12px;
}

.highlighter {
  background: rgba(0, 255, 0, 0.25);
  border: 1px dashed #fff;
  z-index: 1;
  position: absolute;
}
</style>
