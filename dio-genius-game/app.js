let order = [];
let clickedOrder = [];
let score = 0;

/*
0 - green
1 - red
2 - yellow
3 - blue
*/

const green = document.querySelector('.green');
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');

// CREATE RANDOM ORDER
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

// LIGHT THE NEXT COLOR
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('pushed');
    }, number - 300);
    
    setTimeout(() => {
        element.classList.remove('pushed');
    }, number - 200);
}

// CHECK IF THE BUTTONS CLICKED MATCH THE RANDOM ORDER
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            document.getElementById('score-number').innerHTML = 0;
            lose();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        document.getElementById('score-number').innerHTML = score;
        nextLevel();
    }
}

// CLICKING THE COLORS
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('pushed');

    setTimeout(() => {
        createColorElement(color).classList.remove('pushed');
        checkOrder();
    }, 100);
}

// RETURN A NUMBER BASED ON THE COLOR
let createColorElement = (color) => {
    switch(color){
        case 0:
            return green;
        case 1:
            return red;
        case 2:
            return yellow;
        case 3:
            return blue;
    }
}

// ACTIVATE NEXT LEVEL AFTER WINNING
let nextLevel = () => {
    score++;
    shuffleOrder();
}

// IF LOSING
let lose = () => {
    playGame();
}

// START GAME
let playGame = () => {
    order = [];
    clickedOrder = [];
    score = 0;
    nextLevel();
}

// ACTIVATE THE CLICKS
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();

// NAVBAR
let loadSelf = () => {
    location.reload();
}

let openPurchase = () => {
    location.replace("https://www.google.com/search?q=genius+buy&sxsrf=AOaemvJVLm_NAs30oFvjEclfJMYVbWe5ww:1633444360467&source=lnms&tbm=shop&sa=X&ved=2ahUKEwiJkva2vrPzAhVVpZUCHRSAB2QQ_AUoAXoECAEQAw&biw=1536&bih=722&dpr=1.25");
}