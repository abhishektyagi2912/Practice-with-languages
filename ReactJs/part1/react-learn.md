--> to install react we need to install nodejs

<!-- # npm install -g create-react-app -->

---> But here i use npx create-next-app ==> npx is a package runner tool that comes with npm 5.2+ and higher and node package executer

--> For running the react app we need to run the command ==> npm run dev

--> in react we use JSX ==> javascript XML mean in js we use html code also is called JSX

example:-
```js   

import React from 'react';

const Page = () => {
    var a = 110;
  return (
    <div>
      <h1>Page {a}</h1>   this is jsx
    </div>
  );
}

export default Page;

```

--> Real Dom Vs Virtual Dom (Document Object Model)

<!-- Real Dom is the actual dom which is present in the browser -->
<!-- React use virtual dom which is the copy of real dom and when we change anything in virtual dom it will change in real dom -->

--> React is a component based library

*** Imp points ***

1. React is a javascript library for building user interfaces
2. React is used to build single page applications
3. React allows us to create reusable UI components
4. React is used to handle the view layer for web and mobile apps
5. React was created by facebook


<!-- 6. In main page we return only one element but we want to return multiple element then we use react fragment which is ( <> </> ) or <React.Fragment> </React.Fragment> -->
<!-- 7. use client side routing in react we use react router dom  it include in main page "use client" -->

--> We can't make variable directly in react like this ==> var a = 10; this will create error we need to use state for this ==> state is a object which is used to store the data

<!-- so we usestatehook for this ==> useState is a hook which is used to store the data -->
<!-- In react we use props for passing the data from one component to another component -->


--> How to transfer data from one component to another component

<!--  In react we use props for passing the data from one component to another component -->
then we use props in main page like this ==> <Page name="React" /> and in page component we use props like this ==> const Page = (props) => { return ( <div> <h1>Page {props.name}</h1> </div> ); } export default Page;


--> what is routing and why we use it ?

<!-- Routing is the process of keeping the browser URL in sync with what is being rendered(jana h jha mereko) on the page. -->
So we use link for change the page without refresh the page **import link from "next/link"** and use it like this ==> <Link href="/about"> <a>About</a> </Link>

--> we don't want add header again and again then we import header in layout js and set it in layout.js jst before and after the children body

--> How to fetch api in react with Axios?

