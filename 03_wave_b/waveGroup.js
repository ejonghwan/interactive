import { Point } from "./point.js";
import { Wave } from "./wave.js";

export class WaveGroup {
    constructor() {
        this.totalPoint = 6;
        this.totalWave = 1;

        this.color = ['rgba(0,199,235,0.4)', 'rgba(0,146,199,0.4)', 'rgba(0, 87, 158, 0.4)']

        this.wave = []

        for(let i = 0; i < this.totalWave; i++) {
            const wave = new Wave(
                i,
                this.totalPoint,
                this.color[i],
            )
            this.wave[i] = wave
        }
        // console.log(this.wave)
    }

    resize(stageWidth, stageHeight) {
        for(let i = 0; i < this.totalWave; i++) {
            const wave = this.wave[i]
            wave.resize(stageWidth, stageHeight)
        }
    }

    draw(ctx) {
        for(let i = 0; i < this.totalWave; i++) {
            const wave = this.wave[i]
            wave.draw(ctx)
        }
    }

    
}