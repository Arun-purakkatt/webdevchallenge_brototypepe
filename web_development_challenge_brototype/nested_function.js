var num=10;
function hello() {
    num=20;
    function test() {
    var num=40;
}
    test();
}
hello();
console.log(num);
