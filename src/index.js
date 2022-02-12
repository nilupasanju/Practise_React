import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
let city = {
  name ="Madrid",
  country= "Spain"
};

ReactDOM.render(
 <h1>
  {city.name} is in {city.country}
 </h1>,

 document.getElementById('root')
);

*/

/*
function Hello() {
  return (
    <div>
      <hi>Welcome to React</hi>
      <p>Lets build something</p>
    </div>
  );
}

ReactDOM.render(
  <Hello  />,
  document.getElementById('root')
);
*/



/*
function Hello({library, message, number}) {
  return (
    <div>
      <hi>Welcome to {library}</hi>
      <p>{message}</p>
      <p>{number} Props Total</p>
    </div>
  );
}

ReactDom.render(
 <Hello
    library="React"
   message="add dynamic data"
   number={3}
  />,

 document.getElementById('root')
);
*/

//*** Composing Component

/*
function Lake(props) {
  return <h1> {props.name}</h1>
}

Function App(props){
  return (
    <div >
      <Lake name="Lake Tahoe" />,
      <Lake name="Nayagara Lake" />
    </div>

  );
}

ReactDom.render(
 <App/ >,
 document.getElementById('root')
);
*/

//***** Rendering List

/*
const lakeList = [
  "Echo Lake",
  "Beeta Lake",
  "Alpha Lake"
];

function App(props) {
  return (
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

  <App lakes={lakeList}/>,
  document.getElementById('root')
);*/

// ****** Rendering List Object
/*
const lakeList = [
  {id: "1", name: "Echo", trailhead: "Echo"},
  {id: "2", name: "Maud", trailhead: "Wrights"},
  {id: "3", name: "Velma", trailhead: "Bayview"}
];

function App({ lakes}) {
  return(
    <div>
      {lakes.map(lake => (
        <div>
          <h2>{lake.name}</h2>
          <p>Accesed by: {lake.trailhead}</p>
        </div>
      ))}
    </div>
  );
}

ReactDOM.render(
  <App lakes={lakeList}/>,
  document.getElementById('root')

);
*/
