// let name = "javascript"
// let price = 1000

// const myCourse = {
//     name: name,
//     price: price,
//     getName : function(){
//         return this.name
//     }
// }

// const myCourse = {
//     name,
//     price,
//     getName(){
//         return this.name
//     }
// }


// let keys = ["name","price"]
// let x = keys[0]
// let y = keys[1]

// const myCourse = {
//     [x] : "js",
//     [keys[1]] : 1000
// }

// const myArr = [1,2,3]
// let x = myArr[0]
// let y = myArr[1]

// const myArr = [1,2,3]
// let [x,y] = myArr
// let [x,,z] = myArr
// let [,,x] = myArr
// let [x] = myArr

// const myArr = [1,2,3]
// let [x,y,z,...rest] = [1,2,3]
// console.log(rest)

// const course = {
//     name: "js",
//     price: 1000,
//     start: "19h",
//     end: "20h",
//     children: {
//         name: "nodejs"
//     }
// }

// let {name:x, price,start,end,address="hn",children:{name}, ...rest} = course
// console.log(x,name,price,rest) 
// // console.log(address)


// function sum(a,b){
//     return a+b
// }

// sum (3,4)

// function sum(x,...rest){
//     return x+ rest[0]
// }

// sum (3,4)

// function sum ([a,b]){
//     return a+b
// }

// sum ([3,4])

// const arr = [4,5,6]
// const kq = [1,2,3,...arr,7,8,9] / [1,2,3,4,5,6,7,8,9]

// const myObj = {
//     price: 1000,
//     addr: "hn"
// }

// const kq = {
//     name: "js",
//     ...myObj

// }