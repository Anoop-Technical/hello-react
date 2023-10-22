/*


 <div id="parent">
     <div id="child">
         <h1>this i h1 tag</h1>
     </div>
 </div> 

*/

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        React.createElement("h1", {}, "this is h1 tag")
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)


// const heading = React.createElement("h1", {id: "heading", class: "classheading"}, "my name is khan !");
// console.log(heading)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);