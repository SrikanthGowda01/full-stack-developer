let sum = 0
let num = 153
while (num > 0) {
    let remainder = num % 10;
    sum += remainder * remainder * remainder;
    num = parseInt(num / 10);
}
if (sum == num) {
    console.log(' is a armstrong');
} else {
    console.log(' not a armstrong');
}