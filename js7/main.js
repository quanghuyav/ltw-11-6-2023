// Tìm ra element
// Trong element (là 1 obj) có những thuộc tính và phương thức
// Sử dụng những thuộc tính và phương thức để tương tác với element và với những atr của element đó

// const item1Element = document.getElementById("item1")

// console.log("element:" , item1Element)

// const itemElements = document.getElementsByClassName("item")

// console.log(itemElements)

// const divElements = document.getElementsByTagName("div")

// console.log(divElements)

// const element = document.querySelector(".item")

// console.log( element)

// const elements = document.querySelectorAll(".item")

// console.log( elements)

// const container = document.querySelector(".container")

// console.log(container.querySelectorAll(".item"))

// const item  = document.querySelectorAll(".item")[0]

// item.className="item t-blue"
// item.title = "hello"
// console.log(item.tagName)


// item.setAttribute("abc", "Hello")

// console.log(item.getAttribute("title"))
// console.log(item.classList)


// console.log(item.classList.toggle("item"))

// console.log(item.classList)

const container = document.querySelector(".container")

container.outerHTML = "<h1 class  = 'red'>hello</h1>"

console.log(container.outerHTML)
