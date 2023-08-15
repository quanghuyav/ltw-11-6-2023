// const app = document.createElement("div")
// app.className = "app"
// console.log(app)

// const header = document.createElement("div")
// header.className = "header"
// app.appendChild(header)

// const content = document.createElement("div")
// content.className = "content"
// app.appendChild(content)

// // HEADER
// const page1 = document.createElement("button")
// page1.innerText = "Trang chủ"
// header.appendChild(page1)

// const page2 = document.createElement("button")
// page2.innerText = "Nội dung"
// header.appendChild(page2)

// //CONTENT
// const content1 = document.createElement("div")
// content1.innerText = "content1"

// const content2 = document.createElement("div")
// content2.innerText = "content2"


// page1.onclick = function(){
//     content.appendChild(content1)
//     content.removeChild(content2)
// }

// page2.onclick = function(){
//     content.appendChild(content2)
//     content.removeChild(content1)
// }

// document.querySelector("#root").appendChild(app)

console.log(React)

const h1React = React.createElement('h1',{
    className: "heading",
    title:"h1 title"
},"hello world")

console.log(h1React)




const rootDOM = document.getElementById('root')
const root = ReactDOM.createRoot(rootDOM)
root.render(h1React)