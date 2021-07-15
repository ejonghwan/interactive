
// import { Point } from './point.js'
import { WaveGroup } from './waveGroup.js' 


class App {
    constructor() {

        this.canvas = document.createElement('canvas')
        this.body = document.querySelector('body')
        this.body.appendChild(this.canvas)
        this.canvas.style.backgroundColor = 'rgba(0,199,235,0.4)'
        this.canvas.style.width = `${100}%`
        this.canvas.style.height = `${100}%`
        this.ctx = this.canvas.getContext('2d')
        

        // this.point = new Point(20, 20)
        this.WaveGroup = new WaveGroup()

        this.resize()
        window.addEventListener('resize', this.resize.bind(this))
        window.requestAnimationFrame(this.animate.bind(this))
        
    }

    resize() {
        this.stageWidth = this.body.clientWidth 
        this.stageHeight = this.body.clientHeight
        this.canvas.width = this.stageWidth * 2
        this.canvas.height = this.stageHeight * 2
        this.ctx.scale(2, 2)


        // console.log(this.stageWidth)

        this.WaveGroup.resize(this.stageWidth, this.stageHeight)
    }

    animate() {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight)

        this.WaveGroup.draw(this.ctx)

        window.requestAnimationFrame(this.animate.bind(this))
    }

}


window.load = new App()