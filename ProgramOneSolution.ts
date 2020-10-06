//Plots a singular horizontal line, with an optional delay between plots
function plotHorizontalLine(lineNum: number, length: number, delay: number) {
    for (let i = 0; i < 5; i++) {
        if (i >= length) {
            led.unplot(i, lineNum)
        } else {
            basic.pause(delay)
            led.plot(i, lineNum)
        }
    }
}

//Plots all of the lines given an array of lengths, with no delays
function plotAllLines(lineLengths: number[]) {
    for (let i = 0; i < lineLengths.length; i++) {
        plotHorizontalLine(i, lineLengths[i], 0)
    }
}

//Shifts every element of an array left by one spot
function leftShiftArray(arr: number[]) {
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1]
    }
    arr[arr.length - 1] = 0
}

//initialize empty array
let lineLengths = [0, 0, 0, 0, 0]

basic.forever(function () { //main loop forever
    leftShiftArray(lineLengths)
    plotAllLines(lineLengths) //shifts array left and prints the result
    let rand = randint(1, 4)
    plotHorizontalLine(4, rand, 200) //plot new line with delay
    lineLengths[4] = rand //add new line to array
    basic.pause(300)
})