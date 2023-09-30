// varによる再代入
var nickname = "taro"
console.log(nickname)
nickname = "jiro"
console.log(nickname)

// letによる再代入
let nickname = "taro"
console.log(nickname)
nickname = "jiro"
console.log(nickname)

// constによる再代入
const nickname = "taro"
console.log(nickname)
nickname = "jiro"
console.log(nickname)

//varのスコープ
var str = "webcamp" //グローバルスコープ

function foo() {
    console.log(str)
    var y = "hello" //関数スコープ
}

foo()
console.log(y)

//letのスコープ
function foo() {
    let x = "webcamp"
    {
        let y = "hello webcamp"
    }
    console.log(x)
    console.log(y)
}

foo()

//constのスコープ
var str = "webcamp"

function foo() { 
    console.log(str)
    var str = "dmm webcamp"
    console.log(str)
}

foo()

//変数宣言の使い分け
for (let i = 0; i < 10; i++) {
    console.log(i);
}