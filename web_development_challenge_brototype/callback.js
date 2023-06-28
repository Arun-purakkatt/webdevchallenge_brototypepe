function longTasks(millisecondTime) {
    dt=new Date;
    while((new Date-dt)<=millisecondTime) {

    }
}
//symchronous way
console.log('1 start')
longTasks(2000)
console.log('1 end')
console.log('2 start')
longTasks(2000)
console.log('2 end')
console.log('3 start')
longTasks(2000)
console.log('3 end')

//asynchrnousway
function showEnd() {
    console.log('End')
}
console.log('1 start')
setTimeout(showEnd, 2000)

console.log('2 start')
setTimeout(showEnd, 2000)

console.log('3 start')
setTimeout(showEnd, 2000)

