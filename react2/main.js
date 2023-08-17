const dataContent = ["content1", "content2", "content3"];

// const kq = dataContent.map((item, index) => {
//   return React.createElement(
//     "h2",
//     {
//       key: index,
//       style: {
//         color: "red",
//       },
//     },
//     item
//   );
// });
// const header = React.createElement("h1",{
//     className: "header",
//     style: {
//         height: "30px",
//         backgroundColor: "red"
//     }
// }, React.createElement("button",{
//     className: "button1",
// },"click me"))

// const content = React.createElement("div",{
//     className: "header",
//     style: {
//         height: "300px",
//         backgroundColor: "blue"
//     }
// },kq)

// const app = React.createElement(React.Fragment, {
//     className: "app",
//     title: "app"
// },header,content)

const app = (
  <>
        <div className="header">
          <button>button 1</button>
          <button>button 2</button>
        </div>
        <div className="content" style={{ color: "blue" }}>
          {dataContent.map((item, index) =>
            <h2 className= "item" key={index} style={{color: "red"}}>{item}</h2>
          )}
        </div>
  </>
);

const rootDOM = document.querySelector("#root");
const root = ReactDOM.createRoot(rootDOM);
root.render(app);
