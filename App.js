import React from "react";
import ReactDOM from 'react-dom/client';


// React.createElement ==> Object ==> rendr on DOm ==>HTML ELement

// const Heading = React.createElement("div", 
//     { id: 'parent' },
//      "This is heading h1");

const Title =() =>(

    <h1>This is Title</h1>
  
)
const data ="Shweta";

//Component Composistion//
const HeadingComponent = () =>(
    <>
    <Title />
    {alert("Hello React")}
    <Title></Title>
     {data}
    <h1>Namaste React Functional Component@@#</h1>
    </>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />)


//JSX:Babel -->JSX --to JS syntax to create Elemnets: it is not a part of React Lib React apps acan be build without JSX also
