AFRAME.registerComponent('trigger-listener',{
    init: function () {

        this.el.addEventListener('triggerup', () => {
            this.boxEl.setAttribute("material", "color: green");
        });

        this.el.addEventListener('triggerdown', () => {
            this.boxEl.setAttribute("material", "color: yellow");
        });

        this.boxEl = document.querySelector("#box");
        this.boxEl.setAttribute("material", "color: purple");
    },
});