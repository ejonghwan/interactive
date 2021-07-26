class App {
    constructor() {
        this.canvas = document.createElement('canvas')
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');

        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        this.isLoaded = false;
        this.imgPos = {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
        }

        this.image = new Image()
        this.image.src = '/image493_2.jpg'
        this.image.onload = () => {{
            this.isLoaded = true;
            this.drawImage();
        }}
    }

    resize() {
        this.deviceWidth = document.body.clientWidth
        this.deviceHeight = document.body.clientHeight
        this.canvas.width = this.deviceWidth * this.pixelRatio
        this.canvas.height = this.deviceHeight * this.pixelRatio
        this.ctx.scale(this.pixelRatio, this.pixelRatio)

        if(this.isLoaded) {
            this.drawImage();
        }
    }

    drawImage() {
        const stageRatio = this.stageWidth / this.stageWidth;
        const imgRatio = this.image.width / this.image.height;

        this.imgPos.width = this.stageWidth;
        this.imgPos.height = this.stageHeight;

        if(imgRatio > stageRatio) {
            this.imgPos.width = Math.round(this.image.width * (this.stageHeight / this.image.height))
        } else {
            
        }
    }
}


window.onload = new App()