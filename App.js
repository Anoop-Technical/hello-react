import React from 'react'
import ReactDOM  from 'react-dom/client';

/*
    Header
        -Logo
        -Nav Items
    Body
        -Search
        -Restaurant Container
            -Restaurant Card
    Footer
        -Copyright
        -Links
        -Address
        -Contact
*/

// React Element

const heading = (
    <h1 className='head' tabIndex='5'>Hello React Using JSX</h1>
);



// React Functional Component

const HeadingComponent = () => (
    <div id="container">
        <h1 className="heading">Hello React Using Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading)                    ==> the way of render react element

// root.render(<HeadingComponent />)       ==> the way of render react functional component