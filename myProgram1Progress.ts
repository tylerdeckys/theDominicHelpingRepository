let lineOneX: number[] = []
let lineOneY: number = 4
let l1length: number = randint(0, 4)

let lineTwoX: number[] = []
let lineTwoY: number = 4
let l2length: number = randint(0, 4)
let lineThreeX: number[] = []
let lineThreeY: number = 4 //WAYYYYYYY too many variables here, it's a sign that something needs to be condenced into a list and initalized with a loop
let l3length: number = randint(0, 4)

let lineFourX: number[] = []
let lineFourY: number = 4
let l4length: number = randint(0, 4)

let lineFiveX: number[] = []
let lineFiveY: number = 4
let l5length: number = randint(0, 4)

let plotless = [[0, lineOneY], [1, lineOneY], [2, lineOneY], [3, lineOneY], [4, lineOneY]]
let plotless2 = [[0, lineTwoY], [1, lineTwoY], [2, lineTwoY], [3, lineTwoY], [4, lineTwoY]]

//populate is an ambiguous function name, I don't know what it's supposed to do without reading all of it
//function names should tell the reader exactly what they're doing, if it's not obvious always include a comment
function populate(a: number[], b: number) {
    for (let i = 0; i < b + 1; i++) {
        a.push(i)
    }
}

function firstLine(a: number[], b: number) {
    for (let i = 0; i < 5; i++) {
        led.plot(a[i], b)
        basic.pause(200)
    }
}

// function unPlotFirstLine ()
// {
//     for (let i= 0 ; i <5; i++)
//     {
//         led.unplot(plotless[i][0], plotless[i][1])
//     }
// }

function plotLine(a: number[], b: number) {
    b -= 1
    for (let i = 0; i < 5; i++) {
        led.plot(a[0], b)
        led.plot(a[1], b)
        led.plot(a[2], b) //whenever you're repeating code like this that's a red flag that something needs to go in a loop
        led.plot(a[3], b)
        led.plot(a[4], b)

    }
}
// function unPlotCurrentLine (xArray : number[], yVariable: number)
// {
//         for (let i= 0 ; i <5; i++)
//         {//unplot previous line
//             led.unplot(xArray[0], yVariable-1)
//             led.unplot(xArray[1], yVariable-1)
//             led.unplot(xArray[2], yVariable-1)
//             led.unplot(xArray[3], yVariable-1)
//             led.unplot(xArray[4], yVariable-1)
//             //reset Y to 4 and reset X array
//             if (yVariable <=0)
//             {
//                 yVariable=4
//                 for (i =0; i < 5; i++)
//                 xArray.pop()
//             }
//         }
// }   

//bad practice to wrap a function like this, just call basic.clearScreen() directly
function unplotAll() {
    basic.clearScreen()
}


basic.forever(function () {
    let x = randint(1, 10)

    l1length = randint(0, 4)
    l2length = randint(0, 4)
    l3length = randint(0, 4)
    l4length = randint(0, 4) //whenever you're repeating code like this that's a red flag that something needs to go in a loop
    l5length = randint(0, 4)


    populate(lineOneX, l1length)
    populate(lineTwoX, l2length)
    populate(lineThreeX, l3length)
    populate(lineFourX, l4length)
    populate(lineFiveX, l5length)

    firstLine(lineOneX, lineOneY)
    unplotAll()
    plotLine(lineOneX, lineOneY)
    firstLine(lineTwoX, lineTwoY)
    basic.pause(300)

    unplotAll()

    plotLine(lineOneX, lineOneY - 1)
    plotLine(lineTwoX, lineTwoY) //whenever you're repeating code like this that's a red flag that something needs to go in a loop
    firstLine(lineThreeX, lineThreeY)
    basic.pause(300)

    unplotAll()

    plotLine(lineOneX, lineOneY - 2)
    plotLine(lineTwoX, lineTwoY - 1)
    plotLine(lineThreeX, lineThreeY)
    firstLine(lineFourX, lineFourY)
    basic.pause(300)

    unplotAll()

    plotLine(lineOneX, lineOneY - 3)
    plotLine(lineTwoX, lineTwoY - 2)
    plotLine(lineThreeX, lineThreeY - 1)
    plotLine(lineFourX, lineFourY)
    firstLine(lineFiveX, lineFiveY)
    basic.pause(300)

    unplotAll()

})

