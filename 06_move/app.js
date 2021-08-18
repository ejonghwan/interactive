import { Point } from './Point.js'

class App {
    constructor() {
        console.log('init')
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')
        document.body.appendChild(this.canvas)
        this.resize();


        this.mousePos = new Point();
        this.curItem = null;


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
        
    }

    ani() {
        // console.log(11)
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight)
        window.requestAnimationFrame(this.ani.bind(this))
    }

    onDown(e) {
        this.mousePos.x = e.clientX
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