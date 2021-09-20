
// Custom component that handles the controller trigger, which will be used for activating the paint brush.
AFRAME.registerComponent('trigger-listener',{
    init: function () {
        const scene = document.querySelector("a-scene");
        let brushPointInterval;

        this.el.addEventListener('triggerup', () => {
            // Clear interval
            clearInterval(brushPointInterval);
        });

        this.el.addEventListener('triggerdown', () => {
            createBrushPoint();
            brushPointInterval = setInterval(createBrushPoint, 100);
        });

        const createBrushPoint = () => {
            const brushPoint = document.createElement("a-sphere");
            const controllerPos = this.el.getAttribute("position");
            //brushPoint.setAttribute("geometry", "primitive: sphere");
            brushPoint.setAttribute("material", "color: blue");
            brushPoint.setAttribute("geometry", "radius: 0.05");
            brushPoint.setAttribute("position", controllerPos);
            scene.appendChild(brushPoint);
        }

        this.boxEl = document.querySelector("#box");
        this.boxEl.setAttribute("material", "color: purple");
    },
});