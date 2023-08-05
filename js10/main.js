// setTimeout(function(){
//     console.log("bất đồng bộ")
// },0)

// for (let i = 0 ; i<=10000;i++){
//     console.log(i)
// }

// gọi api lấy thông tin ng dùng (cần thời gian chờ phản hồi)
// in ra giao diện

// code đồng bộ >> giảm trải nghiệm ng dùng
// code bất đồng bộ >> tăng tốc độ xử lí, tăng trải nghiệm ng dùng

// A > B (bất đồng bộ) > C
// in chữ a > in chữ b > chờ 5s (bất đồng bộ) > in chữ c  >> xử lý bất đồng bộ

// console.log("a")
// console.log("b")
// setTimeout(function(){
//     console.log("c")
// },5000)

// a >> 5s > b > 6s > c > 7s > d > 8s >e
// console.log("a")
// setTimeout(function(){
//     console.log("b")
//     setTimeout(function(){
//         console.log("c")
//         setTimeout(function(){
//             console.log("d")
//         },7000)
//     },6000)
// },5000)


// const promise1 = new Promise(function(resolve, reject) {
//     if (true) resolve(1)
//     reject("lỗi")
// })


// promise1.then(function(res){
//     console.log(res)
//     return res + 1
// })
// .then(function(res){
//     console.log(res)
//     return res*2
// })
// .then(function(res){
//     console.log(res)
//     return res*2
// })
// .catch(function(err){
//     console.log(err)
// })

// const promise1 = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         if(true) resolve("promise1")
//         else reject("thất bại")
//     },5000)
// })


// const promise2 = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         resolve("promise2")
//     },2000)
// })

function promise1(){
    return new Promise(function(resolve, reject) {
            setTimeout(function(){
                 if(true) resolve("promise1")
                 else reject("thất bại")
            },5000)
        })
}

function promise2(){
    return new Promise(function(resolve, reject) {
            setTimeout(function(){
                 if(true) resolve("promise2")
                 else reject("thất bại")
            },3000)
        })
}

    promise1().then(function(res){
        console.log(res)
        return promise2()
    })
    .then(function(res){
        console.log(res)
    })
    .catch(function(err){
        console.log(err)
    })
