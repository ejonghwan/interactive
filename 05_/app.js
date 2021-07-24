
let arr = ['a', 'b', 'c', 'd', 'e', 'f']

let prev = arr[0];
let cx = null;

for(let i = 1; i < arr.length; i++) {
    
    cx = prev
    console.log('cx: ', cx + 1)

    prev = arr[i]
    console.log(prev)

    



}