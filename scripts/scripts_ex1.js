function mathPow(a, b) {
var resultPow = (a ** b);
    return resultPow
}

let num
let degree

while (isNaN(num)) {
    num = +prompt("Введіть число:", 0);
    console.log(typeof num, num)
    if (isNaN(num)) {
        alert('Це не число, введи число');
    }
}
while (isNaN(degree)) {
    degree = +prompt("Введіть степінь: ", 0 );
    console.log(typeof degree, degree)
    if (isNaN(degree)) {
        alert('Це не число, введи число');
    }
}

alert('число ' + num + ' в степені ' + degree + ' дорівнює ' + mathPow(num, degree));