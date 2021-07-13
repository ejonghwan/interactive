import { Wave } from "./wave.js";

console.log(11)


class App {
    constructor() {
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d');
        this.body = document.querySelector('body')
        this.body.appendChild(this.canvas)

        this.wave = new Wave();
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this))
        window.addEventListener('resize', this.resize.bind(this))
    }

    resize() {
        this.stageWidth = this.body.clientWidth
        this.stageHeight = this.body.clientHeight
        this.canvas.width = this.stageWidth * 2
        this.canvas.height = this.stageHeight * 2
        this.ctx.scale(2, 2)

        this.wave.resize(this.stageWidth, this.stageHeight)
    }

    animate() {
        // console.log(11)
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight)
        this.wave.draw(this.ctx)
        window.requestAnimationFrame(this.animate.bind(this))
    }
}

window.onload = new App();