const box = document.querySelector("#box");
const scene = document.querySelector("a-scene");

// Check if the user has a VR headset, because this application won't work without one.
window.addEventListener('enter-vr', e => {
    if (!AFRAME.utils.device.checkHeadsetConnected()) return;
    box.setAttribute("material", "color: blue");
});