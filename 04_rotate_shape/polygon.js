const PI2 = Math.PI * 2

export class Polygon {
    constructor(x, y, radius, sides) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.sides = sides;
        this.rotate = 0;

        // console.log(this.radius)
    }

    animate(ctx, moveX) {
        ctx.save();
        ctx.fillStyle = '#000';
        ctx.beginPath();

        const angle = PI2 / this.sides; //360도 3등분

        ctx.translate(this.x, this.y) // 중앙으로 이동


        this.rotate -= moveX * 0.008;
        ctx.rotate(this.rotate)


        for(let i = 0; i < this.sides; i++) {
            const x =  this.radius * Math.cos(angle * i); //음수에 *0하면 1
            const y =  this.radius * Math.sin(angle * i);

            (i === 0) ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
            
            console.log(`${i} x: ${x}`)
            console.log(`${i} y: ${y}`)

            /*
            0 x: 229.25
            0 y: 0
            1 x: -114.62499999999994
            1 y: 198.53632381758257
            2 x: -114.6250000000001
            2 y: -198.5363238175825
            */

        }

        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }

}