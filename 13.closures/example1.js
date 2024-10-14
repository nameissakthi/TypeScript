// without closure
var counterValue = 0;
function increamentCounter() {
    counterValue++;
}
function getCounter() {
    return counterValue;
}
increamentCounter();
console.log(getCounter());
increamentCounter();
console.log(getCounter());
