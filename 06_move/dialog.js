import { Point } from './Point.js'

const FOLLOW_SPEED = 0.08;
const ROTATE_SPEED = 0.12;
const SPEED_REDUCE = 0.8;
const MAX_ANGLE = 30;
const FPS = 1000 / 60;
const WIDTH = 260;
const HEIGHT = 260;


export class Dialog {
    constructor() {
        this.pos = new Point()
        this.target = new Point();
        this.prevPos = new Point()
        this.downPos = new Point()
        this.speedPos = new Point()
        this.startPos = new Point()
        this.mousePos = new Point()
        this.centerPos = new Point()
        this.origin = new Point()
        this.rotation = 0;
        this.sideValue = 0;
        this.isDown = false;
    }


    resize(stageWidth, stageHeight) {
        this.pos.x = Math.random() * (stageWidth - WIDTH)
        this.pos.y = Math.random() * (stageHeight - HEIGHT)
        this.target = this.pos.clone();
        this.prevPos = this.pos.clone();
    }

    animate(ctx) {
        ctx.beginPath();
        ctx.fillStyle = `#fff`
        ctx.fillRect(this.pos.x, this.pos.y, WIDTH, HEIGHT);

    }

    down(point) {

    }

    move(point) {
        
    }

    up(point) {
        
    }


}