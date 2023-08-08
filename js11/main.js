// A 
// B
// C

// A (bất đồng bộ) > B > C

// B > C > A

// callback
// A (B > C)
// A (B (C))

// setTimeout(function(){
//     console.log(1)
//     setTimeout(function(){
//         console.log(2)
//         setTimeout()
//     },5000)
// }, 1000)

// PROMISE >> đang chờ >> đến khi đọc được resolve reject >> trả về kết quả là lới hứa được thực hiện thành công hay thất bại



// function promise1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(function(){
//             const goiAPI = "promise 1"
//             if (goiAPI !== "0") {
//                resolve(goiAPI)
//             }
//             else reject(goiAPI)
//         },4000)
//     })
// }

// function promise2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(function(){
//             const goiAPI = "0"
//             if (goiAPI !== "0") {
//                resolve(goiAPI)
//             }
//             else reject(goiAPI)
//         },4000)
//     })
// }

// promise1().then(function(res){
//     console.log(res)
//     return promise2() 
// })
// .then(function(res){
//     console.log(res)
// })
// .catch(function(err){
//     console.log("thất bại",err)
// })

// API


// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(function(res){
//     return res.json()
// })
// .then(function(data){
//     document.body.innerHTML = `<h1>${data.title}</h1>`
//     console.log(data)
// })
// .catch(function(err){
//     console.log(err)
// })

async function callApi(){
    try {
        const res =  await fetch("https://jsonpslaceholder.typicode.com/todos/1")
        const data = await res.json()
        document.body.innerHTML = `<h1>${data.title}</h1>`
    }
    catch(err){
        console.log("lỗi",err)
    }
    
}

callApi()