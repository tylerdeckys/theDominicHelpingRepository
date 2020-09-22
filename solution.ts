
basic.forever(function () {
    let myString = "hi"; //the variable needs to be delared outside the loop since it's changed every iteration and must keep the previous value
 	for (let i=0; i<6; i++){
         myString += i.toString() //this converts the integer i to a string and adds it to the end of the previous string
         // the "+=" operator is shorthand, the equivilent would be:
         //myString = myString + i.toString();
         basic.showString(myString) //shows the new string after our modification
    }

})
