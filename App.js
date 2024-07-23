import React from "react"
import ReactDom from "react-dom/client"

// const heading = React.createElement("h1",{id:"heading"},"hello world from react")
// root.render(heading)

// component => is function that return some react element that can be Jsx and jsx is html like syntax and react element is js object

// component composition => using one React component into another

// react element
const title = (
    <h1>React Title</h1>
)

// react component
const Button = () => (
    <button>Add</button>
)

const Heading = () => (
    <>
    {title}
    <h2 className="heading">React H2</h2>
    <Button/>
    </>
)
const root = ReactDom.createRoot(document.getElementById("root"))

root.render(<Heading/>)