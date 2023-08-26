import React from "react";
import ReactDOM from "react-dom/client"

const parent = React.createElement(
    "div", {id:"parent"}, 
    [React.createElement("div", 
    {id:"child1"},
     [React.createElement("h1", {}, "This is Namaste React "),
     React.createElement("h2", {}, "I'm an h2 tag")  ]
     ),
     React.createElement("div", 
     {id:"child2"},
      [React.createElement("h1", {}, "I'm an h1 tag"),
      React.createElement("h2", {}, "I'm an h2 tag")  ]
      )]
)

// ReactElement(obj) => HTML(Browser Understandable)

//created h1 tag using react 

 console.log(parent) //return an object
// createed root using reactdom - super parent
const root = ReactDOM.createRoot(document.getElementById("root"))
//take the react object adnd put it over the DOM. 
root.render(parent)