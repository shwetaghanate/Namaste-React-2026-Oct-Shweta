Namaste React Shweta Oct 2026
React: no external lib support inbuilt
Ng: All in One framework for completx tasks like form validations, Rective and DYnamic binding forms, RXJs, Routing, Stepper, i18n support

HTTP interceptors ---->in Angular

Recat --->SSR and CSR , easy to learn
Ang: OOps, classes, Dependancy Injection ,etc m Ang is easy , less support than React

Reat : easy to learn and transition in Full stack


4. DOM: tree -like structure respresn the html tag for all manipulations and act as rendere for any componenent to be loaded on browser
doc object model
Real DOM increase the load time even when only title is been updated or changed
Virtual DOM: React lib creates an exact copy of real dowm known as Virtual DOM for loading or rendering its only updated componenet sinit
so that browser DOm is reduced load time and nly updates what is been changed
in bg - react lib keep an eye what is been change in its compon and update sthe virtual dom tree and not the real dom tree everytime
with reconciliation or diffing alogorithm
--Less rendring of virtual dom to efficen yupdtaes which helps in lesser load time of real dom and helps to improves performance
--and makes app more responsive
---more than 1 virtual dom created by lib of react

5.Recat component: are basic UI bbb of react lib used for resuusability purpose
Class based and FUnctunal based componenets in React available
FP : most common comp in Recat lib

React 18 vs React 19 Feature comparision

Performance Optimization: useMemo, Moemeos explicitytobe used	React 19: Meta compiler optimizes it bnhid the scenes for reduceing re-renders
UI Optimistics: 
use manually use hooks for manuall roolback and complex logics	useOptimistics, useActionState, useFormStatus available
useState action Hooks not avialale	useActionState:manages the return value, state of the compoennets, eerror ans sucess States , Status for form Statues and async oprtations
Optimization manual: devs debated whether to use useCallback or useMemo in the application components	automatic hooks available behind the scenes
React 18 manual	useOptimistics : hooks instantly reflects on UI updates, even before server confirms it
	
	







TypeScript Tutorial:
PS D:\Typescript\helloworld> node .\src\index.js

Tuple
enum : const grouping : enum tSize {Smal=1, Medium=2, Large=3}
console.log(tSize.Small) //1
D:\Typescript\helloworld\src>tsc index.ts --ignoreConfig


React Router:
SSR vs CSR :



Redux tolkit: Slice : reducer big version



GPT 6 Astra :  Excel, gamedevelopment 2026
AI is v nice in human intraction in terms of proactive and with new Model and agenatic AI agenst built :
Promt enginnering
Open AI, Antrophic : Comapanies are profitable

Ai is expensive and it can be made free for most of the Tech/AI company:
VVIMP: POV : point of View
Github Copilot, Opus , GPT - Astra:
25th SEp: Claude-->Opus 5.5 Model Ai
Claude: is an AI assistant built by Antrophic tobe more secure, taaaks, more deep in term sof learning and resond,
	accurate data intercat


Redux Toolkit:

Jev and Laya : DEcision Model in AI
ChatGPT Astra 6: Uktrafat	

#parcel
HMR
- DEv server
-  Bundling
- minification(compressed)
- filw watching - C++
- Caching 
- parcel caches bukld for you
- images optimization: parcel image optimization
- Differential Bundling; runs on cross browsers sites
- Disgnostics: beatuifc
- C0de splitting
- Consisyency Hasking
- ErrorHandling
- SSL https runing
- COmpress, Bundling theApp
-  HMR : Hot module Tool
 -Automatic production optimization: algorithm , cases use-
 - Tree Shaking: remove he unused code for the production builds , Build size is reduced
   Alogorithm: from file, unused improts, exports
   - different bundle for dev and production bundle 


   JSX: code(): transpiled before its reaching JSENgine-->Browser

   //Upper case letter for React compoennet is amust

   React 19 new features:

no manual Momoization:  direct optimization in React COmpiler
React Reconcilation Algorithm : React Fibre:
no need to use UseMemo, use CallBcak
<
> new feature: animation to warp the componenenst as they exnter, exit, move etc
<Fragmenst> usage
<we can use(Browser()) function for rendering server side Rendering eg: to get the timeZOne frm local PC

Namste React 2026 : 23rd OCt :2486/- RS


<ngb-alert [dismissible]="false" type="info">
  The UserComponent works!
</ngb-alert>

<div>
  <!-- <div>{{ this.data }}</div> -->
  Search By:
  <input type="text" value="" placeholder="find" (input)="onSearch($event)" />
  <table width="50%" height="200px" border="2px solid red">
    <thead>
      <tr>
        <th>Customer Name</th>
        <th>Account Number</th>
        <th>Account Status</th>
        <th>Type</th>
        <th>Amount</th>
      </tr>
    </thead> ? '➖' : '➕'}
    <tbody>
      <ng-container>
        <tr *ngFor="let item of data">
          <td>{{ item.customerName }}</td>
          <td>{{ item.accountNumber }}</td>
          <td>{{ item.status }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.amount }}</td>
        </tr>
      </ng-container>
      <p>{{ searchText }}</p>
    </tbody>
  </table>
</div>


PayID: pay_TsWi9jJ86yscSt Namster React 2026 React prenium


“Led a team of X engineers delivering [product/module], improving [load time, defect rate, release frequency, or user outcome] by Y.”
“Introduced shared UI components/design-system patterns adopted by X teams.”
“Mentored X developers; established review and testing practices that reduced [measured issue].”

>>npx parcel index.html
>>npm install react
>>npm i react-dom



package.json
"type": "commonjs",
  // "main": "App.js",
  "source": "index.html",



Root cause: import React from "react";
import { createRoot } from 'react-dom/client';
//new react 18+ versions

remove main: "App.js" from package.json : to get rid of prod build error
npx parcel build index.html
npx parcel index.html


>>package.json: 
"scripts" : {
'start': 'parcel index.html
}

git :
 git push origin main

>>npm run start...
uninterrupted time for coding, debugging, meetings, reviews and technical decisions.

npm run start=== npm start : calling npx parcel index.html

App.js : file :
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



//JSX: JS syntax to create Elemnets: it is not a part of React Lib
//React apps acan be build without JSX also

//JSX: html like syntax

Babel is a JS compiler  or trabsplier that React will understand..
JS - babel : JS compiler


import React from "react";
import ReactDOM from 'react-dom/client';


// React.createElement ==> Object ==> rendr on DOm ==>HTML ELement

// const Heading = React.createElement("div", 
//     { id: 'parent' },
//      "This is heading h1");

const jsxHeading =  (<h1 className="parent">
    This is JSX : HTML like syntax
    </h1>)

//  <img src="./images/image1.jpeg" alt="BigCo Inc. logo"/>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxHeading)

//JSX: JS syntax to create Elemnets: it is not a part of React Lib React apps acan be build without JSX also
//Babel traspiled JSX to React.createElement 
//JSX: is not HTML in JS - JSX is HTML like syntax...

react component : 
Everyting in React is a component
Searchbar is acompnet
List of cards its acomponent
header. Footer its a component
card, title is acompoent
list of menu : component: React functions

Class based Components:old way 
Functional components: New way lastest std React componenst


Functinal c: is S fin+ returning JSX (React element


const obj = [{
    key: 'Sample 1',
    data: 'Data1',
},
            {
    key: 'Sample 3',
    data: 'Data3',
},
            {
    key: 'Sample 3',
    data: 'Data3',
},
            {
    key: 'Sample 1',
    data: 'Data1',
},
 {
    key: 'Sample 2',
    data: 'Data2',
}]

function getGroup(obj){
    let map= new Map();
    const output = {};
    for(let i=0; i<obj.length; i++){
        if(output[obj[i].key]){
          //key is available
           output[obj[i].key].push(obj[i])
        }
        else{
            output[obj[i].key] = [obj[i]]
        }
    }
    return output;
}

///memeoization:

function memoizedOne(fn){
    function temp(...args){
        console.log("args", args);
        const key = args.join("_")
        if(map.has(key)) {
            
            console.log("from cache")
            return map.get(key)
        }
    }
    temp(fn)
}
console.log(memoizedOne(add(2,3)))
console.log(memoizedOne(add(3,2)))
console.log(memoizedOne(add(1,10)))

////Flatten an array elemenst:

function flatten(arr){
    let flat = [];
    for(let item of arr){
        if(Array.isArray(item)){
            flat.push(...flatten(item))
        }
        else {
            flat.push(item)
        }
    }
    return flat;
        
}
let arr =[1,2,[2,3,4,4], [2,3],[[3,5,6,7,8],1] ]
//very IMP example of recursion ..

*****Compoennt composition: combining 2 compoennst one after the other 

JSX will escape the XSS data sent to browser
DOM sanitizer: prevention JSX 

amazing functional componenst callinh in App.js
const HeadingComponent = () =>(
    <>
    <Title />
    {Title()}
    <Title></Title>
     {data}
    <h1>Namaste React Functional Component@@#</h1>
    </>
)

JSX makes our web apps more readbale and more fast 

