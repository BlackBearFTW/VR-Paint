
// Custom component that handles the controller trigger, which will be used for activating the paint brush.
AFRAME.registerComponent('trigger-listener',{
    init: function () {
        const scene = document.querySelector("a-scene");

        this.el.addEventListener('triggerup', () => {
            // Clear interval
        });

        this.el.addEventListener('triggerdown', () => {
            const brushPoint = document.createElement("a-sphere");
            //brushPoint.setAttribute("geometry", "primitive: sphere");
            brushPoint.setAttribute("material", "color: blue");
            brushPoint.setAttribute("geometry", "radius: 0.5");
            //brushPoint.setAttribute("position", this.el.getAttribute("position"));
            scene.appendChild(brushPoint);
        });

        this.boxEl = document.querySelector("#box");
        this.boxEl.setAttribute("material", "color: purple");
    },
});