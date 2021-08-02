export class Sheep {
    constructor(img, stageWidth) {
        this.img = img;
        
        this.totalFrame = 10 //프레임개수
        this.curFrame = 0;
        
        this.imgWidth = 82;
        this.imgHeight = 86;

        this.sheepWidth = 82;
        this.sheepHeight = 83;

        this.sheepWidthHalf = this.sheepWidth / 2;
        this.x = stageWidth + this.sheepWidth;
        this.y = 0;
        this.speed = Math.random() * 2 + 1;

        this.fps = 24;
        this.fpsTime = 1000 / this.fps;
    }

    draw(ctx, t, dots) {

        if(!this.time) {
            this.time = t;
        }

        const now = t - this.time;
        if(now > this.fpsTime) {
            this.time = t;
            this.curFrame += 1;
            if(this.curFrame === this.totalFrame) {
                this.curFrame = 0;
            }
        }

        this.animate(ctx, dots)

    }

    // Quadratic Bézier curves
    //{\displaystyle \mathbf {B} (t)=(1-t)^{2}\mathbf {P} _{0}+2(1-t)t\mathbf {P} _{1}+t^{2}\mathbf {P} _{2},\ 0\leq t\leq 1.}

    getQuadValue(p0, p1, p2, t) {
        return (1 - t) * (1 - t) * p0 + 2 * (1 - t) * t * p1 + t * t * p2; 
    }

    getPointOnQuad(x1, y1, x2, y2, x3, y3, t) {
        return {
            x: this.getQuadValue(x1, x2, x3, t),
            y: this.getQuadValue(y1, y2, y3, t),
        }
    }

    animate(ctx, dots) {
        this.x -= this.speed;
        this.y = 550;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillStyle = '#000';
        // ctx.fillRect(
        //     -this.sheepWidthHalf,
        //     -this.sheepHeight + 20,
        //     this.sheepWidth,
        //     this.sheepHeight
        // );
        ctx.drawImage(
            this.img,
            this.imgWidth * this.curFrame,
            0,
            this.imgWidth,
            this.imgHeight,
            -this.sheepWidthHalf,
            -this.sheepHeight + 20,
            this.sheepWidth,
            this.sheepHeight,
        );

        ctx.restore();
    }

    
}