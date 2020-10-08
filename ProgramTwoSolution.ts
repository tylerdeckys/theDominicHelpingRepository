//Draws all drops - operates under the assumption each list is the same length
function drawAllDrops(x : number[], y : number[], bright : number[]) {
    basic.clearScreen()
    for (let i = 0; i < x.length; i++) {
        led.plotBrightness(x[i], y[i], bright[i])
    }
}

// moves all drops and generates a random new drop if they fall off the screen - operates under the assumption each list is the same length
function moveDrops(x : number[], y : number[], speed : number[], ticks : number[], bright : number[]) {
    for (let i = 0; i < x.length; i++) { //for each drop
        ticks[i] += 1 //iterate the drops counter
        if (ticks[i] >= speed[i]) { //if the counter reaches the speed, it's time for the drop to move
            ticks[i] = 0 //reset the counter
            y[i] += 1
        }
        if (y[i] > 4) { //if the drop falls of the screen, generate new drop
            y[i] = 0 //reset y value
            x[i] = randint(0, 4) //put in random column
            speed[i] = randint(1, 3) //randomize the speed
            bright[i] = 255 - (speed[i] - 1) * 100 //make the brightness inversly proportional to the speed
        }
    }
}

let x = [0, 1, 2, 3, 4, 0, 1, 2, 3, 4] //x value of each drop
let y = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5] //y value of each drop
let bright = [200, 200, 200, 200, 200, 200, 200, 200, 200, 200] //brightness of each drop
let speed = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2] //speed - note: higher value = lower speed
let ticks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] //current tick, increments each iteration until it hits the speed, then it's time to move

basic.forever(function () {
    drawAllDrops(x, y, bright)
    moveDrops(x, y, speed, ticks, bright)
    basic.pause(50)
})