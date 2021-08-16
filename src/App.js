import React from "react";
import './App.css';
import './styles/global.css';
import Box from './components/Box';

const tempMin  = -20;
const tempMax  = 40;
const heartMin =  80;
const heartMax = 180;
const stepsMin =   0;
const stepsMax = 50000;

export class App extends React.Component {
  render() {
    return (
      <div className = "container-fluid">
        <div className = "row">

          <p>Heart : {heartMin} </p>
          <p>Temperature : {tempMin} </p>
          <p> steps: {stepsMin} </p>

        </div>

        <div className="row">

          <Box title="heart" value="{30}" icon ="directions_walk" unit="gjgj"/>
          <Box />
          <Box />
          <Box />

        </div>


      </div>
    );
  }
}

export default App;