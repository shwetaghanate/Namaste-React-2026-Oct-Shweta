import React from "react";
import ReactDOM from 'react-dom/client';

//React.createElement ==> Object ==> rendr on DOm ==>HTML ELement

const Heading = React.createElement("div", {class: 'header'}, "This is heading h1");

import React from "react";
import { createRoot } from 'react-dom/client';
  
  
// const heading = React.createElement('div', { id: 'parent' },
//     [React.createElement('div', { id: 'child' },"centered Child",
//         [React.createElement('h1', {}, "I'm a h1 tag"),
//         React.createElement('h2', {}, "I'm a h2 tag")]
//     ),   React.createElement('div', { id: 'child2' },"centered Child",
//         [React.createElement('h1', {}, "I'm a h1 tag"),
//         React.createElement('h2', {}, "I'm a h2 tag")]
//     )]
// )
const heading = React.createElement('div', { id: 'parent'}, 'Im h1 tag div')
console.log(heading)

const root = createRoot(document.getElementById("root"));
root.render(heading);