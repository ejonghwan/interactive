export class Point {
    constructor(index, x, y) {
        this.x = x;
        this.y = y;
        this.fixedY = y
        this.max = Math.random() * 100 + 150;
        this.cur = index
        this.speed = 0.05

        
    }

    update(ctx) {
        // console.log(this.cur)
        this.cur += this.speed
        this.y = this.fixedY + (Math.sin(this.cur) * this.max) 
    
    }





}