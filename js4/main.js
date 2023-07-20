// function sum (a,b) {
//     return a+b
// } 
// // Là một lệnh tạo hàm
// // >> sum là một hàm
// // Hàm

// sum // Hàm; Trỏ đến hàm sum

// sum(3,4) // Lời gọi hàm; Sử dụng hàm sum



// function cb(){
//     console.log("callback")
// }

// // callback()

// function myFunc (x){
//     console.log("1")
//     console.log("2")
//     x()
// }

// myFunc(cb)

// myFunc(function (){
//     console.log("hi")
// })
// // Tương đương
// function cb1() {
//     console.log("2")
// }
// myFunc(cb1)

// setTimeout setInterval

// function log(){
//     console.log("thức dậy")
//     setTimeout(function (){
//         console.log("đi làm")
//     }, 2000 )
// }

// console.log("đi ngủ")

// setTimeout(log,3000)

//  tham số trong callback

// function myF (call){
//     const x = 10
//     call(x)
// }

// myF(function(item){
//     console.log(item)
// })

// MẢNG 
// var x = {}
// const a = ["a",1,true,null,,,x] //0-1-2-3
// // console.log(a[2])

// console.log(a.length)

// const arr = ["java","js","python","C","C++","ruby"]

// console.log("mảng trước:" , arr)

// const kq = arr.slice(1,4)

// console.log("mảng sau:" , arr)

// console.log("trả về:", kq)


// CHUỖI
// const myStr = "xin chào các bạn xin chào xin chào"
// // console.log(myStr.charAt(2))
// // console.log(myStr[2])

// console.log(myStr.split("chào"))

// console.log(myStr)

// NANG CAO MẢNG

// console.log([1,2,3].concat( [4,5,6]))

// const arr = [1,2,3,4,5,6]

// const kq = arr.filter(function(item){
//     if (item % 7 ==0) return true
//     else return false
// })

// console.log(kq)

//  filt lặp đến số 1 >> callback(1) >> callback return true > thêm vào
// filt .................callback(2) >>>

// const arr = [1,2,3,4,5,6]

// const kq = arr.find(function(item){
//     if (item % 7 ==0) return true
//     else return false
// })

// console.log(kq)

const arr = ["huy","long","abc"]

const kq = arr.map(function(item){
    console.log(item)
   return "xin chào" + item
})

console.log(kq)