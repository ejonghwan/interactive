
//dom
const ground = document.querySelector('.ground > ul')


// setting
const GAME_ROWS = 20;
const GAME_COLS = 10;


//variables
let score = 0;
let duration = 500;
let downInterval;
let tempMovingItem;

const BLOCKS = {
    tree: [
        [[2, 1], [0, 1], [1, 0], [1, 1]],
        [],
        [],
        [],
    ]
}

const movingItem = {
    type: "tree",
    direction: 0,
    top: 0,
    left: 3,

};



//functions
init();


function init() {
    tempMovingItem = {...movingItem};

    for(let i = 0; i < GAME_ROWS; i++) {
        prependNewLine()
    }

    renderBlocks()
}



function prependNewLine() {
    const li = document.createElement('li');
    const ul = document.createElement('ul');
    ground.prepend(li)
    li.prepend(ul);
    

    for(let j = 0; j < GAME_COLS; j++) {
        const matrix = document.createElement('li');
        ul.prepend(matrix);
    }
    
}


function renderBlocks() {
    const { type, direction, top, left } = tempMovingItem;
    const movingBlocks = document.querySelectorAll('.moving')

    movingBlocks.forEach( moving => {
        console.log(moving)
        moving.classList.remove(type, "moving")
    })

    BLOCKS[type][direction].forEach(block => {
        const x = block[0] + left;
        const y = block[1] + top;
        const target = ground.childNodes[y] ? ground.childNodes[y].childNodes[0].childNodes[x] : null;
        const isAvailable = checkEmpty(target)

        if(isAvailable) {
            target.classList.add(type, "moving")
        } else {
            tempMovingItem = {...movingItem} //원상복귀
            setTimeout(() => { //모든 스택이 비웠을 때
                renderBlocks()
            }, 0)
        }

        // console.log(target)
    })

    movingItem.left = left
    movingItem.top = top;
    movingItem.direction = direction
}

function checkEmpty(target) {
    if(!target) {
        return false
    };

    return true;
}

function moveBlock(moveType, amount) {
    tempMovingItem[moveType] += amount;
    renderBlocks()
}


window.addEventListener('keydown', e => {
    switch(e.keyCode) {
        case 39: {
            return moveBlock('left', 1)
            // break
        }

        case 37: {
            return moveBlock('left', -1)
            // break
        }

        case 40: {
            return moveBlock('top', 1)
        }


        default: {
            break
        }
    }
})