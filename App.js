// const heading=React.createElement("h1",
//     {id:"heading",
//     xyz:"abc"},
//     "this is react");

/**
 *<div="parent">
    <div="child">
    <h1>i am h1 tag<h1>
    <div>
 <div>
 * 
 */
//what is crossorigin
//
import React from "react";
import ReactDOM from "react-dom/client";

const parent=React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{},"namste react"),
            React.createElement("h2",{},"i am h2 tag")]
    ),
    React.createElement(
        "div",
        {id:"child2"},
        [React.createElement("h1",{},"i am h1 tag"),
            React.createElement("h2",{},"i am h2 tag")]
    )
]
);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
