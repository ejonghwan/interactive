import { Copy2 } from './copy2.js'

class Copy {
    constructor() {
        this.copy = document.querySelector('.copy');
        // window.addEventListener('click', this.console.bind(this))
        const ee = new Copy2
        window.addEventListener('click', ee.console2)
    }

    console() {
        console.log(this.copy)
        // console.log(this) //여기의 this는 bind로 안 잡아주면 window가 됨. 
    }
}

window.onload = () => {
    new Copy()
}