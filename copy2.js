export class Copy2 {
    constructor() {
        this.test = document.querySelector('.copy2')
        this.num = 0;
        // window.addEventListener('click', this.console2.bind(this))
    }

    aa = 1

    console2() {
        console.log(this.test, 111111)
        this.num += 5
        this.test.style.marginLeft = this.num + 'px'
    }
    
}

