10.60 + 1000;

var today = new Date();
var day = today.toJSON()
console.log(typeof today);
console.log(day);

function foo(arg) {
    return arg;
}
var i = 0;
while (1) {
    if (i > 5) {
        break;
    }
    console.log(foo(i))
    i++;
}

for (var i = 0; i < 10; i++) {
    console.log(i);
}

var time = 20;
var greeting;

if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = 'Good day';
} else {
    greeting = '한글';
}

console.log(greeting);

var person = {
    name: "Lee",
    gender: "male",
    sayHello: function () {
        console.log('my name is' + this.name);
    }
}

console.log(person)
console.log(person.sayHello());

var integer = 10;        // 정수
var double = 10.12;      // 실수
var negative = -20;      // 음의 정수
var binary = 0b01000001; // 2진수
var octal = 0o101;       // 8진수
var hex = 0x41;          // 16진수

console.log(binary === octal);
var a = 0.1;
var b = 0.2;
console.log(0.1+0.2 === 0.3);

// 원주율 (파이)
const circleArea = Math.PI

console.log(circleArea)

// 변수 scope

console.log(fooo)
var fooo = 300;
{
    var fooo = 400;
}
console.log(fooo)

// 이런 구조도 가능하다
console.log(
    function test(a) {
        return a;
    }(7)
)