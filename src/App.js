import {DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


import {
    BrowserRouter, Routes,
    Route,
} from 'react-router-dom'
import './App.css';
import Tool from './tool/Tool'
import Canvas from './canvas/Canvas';

function App() {
  return (
    <div className="App">
     < Tool />
    </div>

  );
}

export default App;
// console.log(App);
