// const element = document.querySelector("h1")

// element.title =  "hello"

// Object.assign(element.style, {
//     backgroundColor: "blue",
//     fontSize: "30px"
// })

// console.log(element.style)  

// function handleClick () {
//     console.log(1)
//     console.log(2)
// }

// const element = document.querySelector("h1")


// element.onclick = handleClick  //hàm

// // Chờ người dùng click vào >> gọi handleClick()

// const element = document.querySelector("a")

// element.onclick = function (e){
//     e.preventDefault()
//     console.log(e)
// }

// const div1 = document.querySelector(".div1")
// const div2 = document.querySelector(".div2")
// const div3 = document.querySelector(".div3")

// div1.onclick = function(e){
//     console.log("div1")
// }

// div2.onclick = function(e){
//     e.stopPropagation()
    
//     console.log("div2")
// }


// div3.onclick = function(e){
//     e.stopPropagation()

//     console.log("div3")
// }

const element = document.querySelector(".div1")

function handleCV2(){
    console.log("cv2")
}

element.addEventListener("click", function(e){
    console.log("cv1")
})

element.addEventListener("click", handleCV2)

element.removeEventListener("click",handleCV2)