const player={
    name:'XXG',
    [Symbol('birthday')]:'1992-09-29'
}

Object.defineProperties(player,{
    isHallofFame:{
        enumerable:false,
        value:true
    },
    [Symbol('ScoreKingTime')]:{
        enumerable:false,
        value:4
    }
})

Object.defineProperties(player.__proto__,{
    university:{
        enumerable:true,
        value:'Georgetown'
    },
    team:{
        enumerable:false,
        value:'76ers'
    },
    [Symbol('country')]:{
        enumerable:true,
        value:'USA'
    },
    [Symbol('hometown')]:{
        enumerable:false,
        value:'Virginia'
    }
})
// 1. for in 包含自身以及原型上所有可枚举的属性，【不包括Symbol属性】
console.log('--------------for in 包含自身以及原型上所有可枚举的属性，【不包括Symbol属性】-------------')
for (const name in player) {
    console.log('name',name)
}

// 1.1 由于for in 可以便利原型上的属性，一般使用的时候会通过hasOwnProperty来过滤掉原型上的属性
console.log('--------------通过for in+hasOwnProperty过滤原型上的属性-------------')
for (const name in player) {
    if (Object.hasOwnProperty.call(player, name)) {
        console.log('name',name)        
    }
}

// 2 Object.keys 返回所有自身可枚举的属性(不含Symbol属性)，不包含原型上的任何属性
console.log('--------------Object.keys 返回所有自身可枚举的属性(不含Symbol属性)，不包含原型上的任何属性-------------')
console.log(Object.keys(player))

// Object.getOwnPropertyNames 所有自身的属性（包含不可枚举属性但不包含 Symbol 属性），不包含原型上的任何属性
console.log('--------------Object.getOwnPropertyNames 所有自身的属性（包含不可枚举属性但不包含 Symbol 属性），不包含原型上的任何属性-------------')
console.log(Object.getOwnPropertyNames(player))

// Object.getOwnPropertySymblos 返回自身所有Symbol属性(包含不可枚举的)，但不含原型上的任何属性
console.log('--------------Object.getOwnPropertySymblos 返回自身所有Symbol属性(包含不可枚举的)，但不含原型上的任何属性-------------')
console.log(Object.getOwnPropertySymbols(player))

// Reflect.ownKeys 返回自身所有属性(包含不可枚举的以及所有Symbol属性)，不包含原型上的任何属性
console.log('--------------Reflect.ownKeys 返回自身所有属性(包含不可枚举的以及所有Symbol属性)，不包含原型上的任何属性-------------')
console.log(Reflect.ownKeys(player))

// Object.values 与Object.keys一样，区别就是返回的是值
// Object.entries 与Object.keys一样，区别就是返回的[key,value]的集合
// Object中的使用案例
// const obj1={a:1,b:2,c:3}
// // Object.entries(obj1) // ==>[['a',1],['b',2],['c',3]]
// Object.fromEntries(Object.entries(obj1).map(([key,value])=>{
//     return [key,value*2]
// })) // ==> {a:2,b:4,c:6}
