function mathPow(a, b) {
    var resultPow = (a ** b);
    return resultPow
}
let i = 1;
while (i < 2) {
    i++;
    let num = + prompt('Введи число');
    let degree = + prompt('Введи ступінь');

    console.log(typeof num, num, typeof degree, degree);

    let numInPow = mathPow(num, degree);
    alert('число ' + num + ' в степені ' + degree + ' дорівнює ' + numInPow);
    console.clear();
}