const box = document.querySelector("#box");
const scene = document.querySelector("a-scene");


window.addEventListener('enter-vr', e => {
    if (!AFRAME.utils.device.checkHeadsetConnected()) return;
    box.setAttribute("material", "color: blue");
});