// import * as obj from "./hello.js"

// console.log("main", obj.default)


// // function hello() {
// //     console.log("hello")
// //     return function(){

// //     }
// // }

// // function main(){
// //     const kq = hello()
// //     console.log("main")
// // }


// function App(props){
//     props.callback()
//     return <h1 className = {props.classText}>{props.text} {props.abc}</h1>
// }

// function App({callback=function(){}, classText,abc,text}){
//     callback()
//     return <h1 onClick = {()=>{console.log("app nè")}} className = {classText}>{text} {abc}</h1>
// }

// function HeaderItem(){
//     return <h1>Header Item</h1>
// }

// const AppObj = {
//     name:"abc",
//     Header(){
//         var x = 1
//         return <>
//             <HeaderItem></HeaderItem>
//             <HeaderItem></HeaderItem>
//             <HeaderItem></HeaderItem>
//             {x || <h1>default</h1>}
//             {x && <h1>giá trị của x là</h1>}
//         </>
//     },
//     Main(){
//         return <h1>Main</h1>
//     }
// }

// function App({callback=function(){}, classText,abc,text}){
//     callback()
//     return <>
//         <AppObj.Header></AppObj.Header>
//         <AppObj.Main></AppObj.Main>
//     </>
// }


// function Input({...rest}){
//     return <input {...rest}></input>
// }

function App({callback=function(){}, classText,abc,text, children}){
    callback()
    return <div>{children}</div>
}

const rootDOM = document.querySelector("#root")
const root = ReactDOM.createRoot(rootDOM)
root.render(<App><h2>abc</h2></App>)
