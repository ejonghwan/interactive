import { Point } from './Point.js'
import { Dialog } from './dialog.js'

class App {
    constructor() {
        console.log('init')
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')
        document.body.appendChild(this.canvas)
        

        this.mousePos = new Point();
        this.curItem = null;


        this.items = [];
        this.total = 1;
        for(let i = 0; i < this.total; i++) {
            this.items[i] = new Dialog();
        }

        console.log(this.items.length)


        this.resize();
        window.requestAnimationFrame(this.ani.bind(this))
        window.addEventListener('resize', this.resize.bind(this))
        document.addEventListener('pointerdown', this.onDown.bind(this))
        document.addEventListener('pointermove', this.onMove.bind(this))
        document.addEventListener('pointerup', this.onUp.bind(this))
    }

    resize() {
        this.stageWidth = document.body.clientWidth * 2;
        this.stageHeight = document.body.clientHeight * 2;
        this.ctx.scale(2, 2)

        this.ctx.shadowOffsetX = 0;
        this.ctx.shadowOffsetY = 3;
        this.ctx.shadowBlur = 6;
        this.ctx.shadowColor = `rgba(0, 0, 0, 0.1)`

        this.ctx.lineWidth = 2;

        for(let i = 0; i < this.items.length; i++) {
            this.items[i].resize(this.stageWidth, this.stageHeight)
        }
    }

    ani() {
        // console.log(11)
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight)

        for(let i = 0; i < this.items.length; i++) {
            this.items[i].animate(this.ctx)
        }

        window.requestAnimationFrame(this.ani.bind(this))
    }

    onDown(e) {
        // this.mousePos.x = e.clientX
        this.mousePos.y = e.clientY
    }    

    onMove(e) {
        this.mousePos.x = e.clientX
        this.mousePos.y = e.clientY
    }

    onUp(e) {

    }


}

window.onload = () => {
    new App();
}