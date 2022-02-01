import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const lakeList = [
  "Echo Lake",
  "Beeta Lake",
  "Alpha Lake"
];



//function Lake(props) {
  //return <h1> {props.name}</h1>
//}

//function Hello({library, message, number}) {
  //return (
   // <div>
      //<hi>Welcome to {library}</hi>
      //<p>{message}</p>
      //<p>{number} Props Total</p>
   // </div>
  //);
//}


function App(props) {
  return (
     //create element (element, where we need to render) arguments(name of tag, propeties, children)
    //React.createElement("h1", null, "Hello!" ),

    //<div >
    // <Lake name="Lake Tahoe" />
    // <Lake name="Nayagara Lake" />
    //</div>

    <div> Eventual Lakes</div>,
    <ul>
      {props.lakes.map(lake => (
        <li>{lake}</li>
      )
        )}
    </ul>
  );
}

ReactDOM.render(
  //<Hello
    //library="React"
   // message="add dynamic data"
   // number={3}
  ///>,
  <App lakes={lakeList}/>,
  document.getElementById('root')
);
//