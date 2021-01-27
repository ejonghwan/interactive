import { Copy2 } from './copy2.js'

class Copy {
    constructor() {
        this.copy = document.querySelector('.copy');
        // window.addEventListener('click', this.console.bind(this))
        const ee = new Copy2()

        // window.addEventListener('click', function() {
        //     ee.console2()
        //     console.log(this) //여기서 this도 window
        //     // console.log(ee.console2)
        // })


        // window.addEventListener('click', () => {
        //     ee.console2()
        //     console.log(this) //여기서 this는 Copy가 나옴
        //     // console.log(ee.console2)
        // })

        // 이렇게 이벤트에 직접 넣을 때는 bind를 new Copy2로 연결해주면 됨.
        window.addEventListener('click', ee.console2.bind(ee))

        
    }

    
    
    console() {
        console.log(this.copy)
        // console.log(this) //여기의 this는 bind로 안 잡아주면 window가 됨. 
    }
}

window.onload = () => {
    new Copy()
}