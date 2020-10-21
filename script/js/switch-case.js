/* var x = 4;
switch (x) {
case 1:
    console.log("Hi" + 1)
    break;
case 2:
    console.log("Hi" + "hi")
    break;
case 4:
    console.log("Hi" + "ha")
    break;
default:
    console.log("Hi" + 1)
} */
var array = [100, 50, 79, 43, 45]
for (i = 0; i < array.lenght - 1; i++) {
    for (j = i + 1; j < array.lenght; j++) {
        if (array[i] < array[j]) {
            var abc = array[i];
            array[i] = array[j];
            array[j] = abc;
        }
    }
}
console.log(array);