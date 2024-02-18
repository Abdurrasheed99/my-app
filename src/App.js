import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';


import './App.css';
import Tool from './tool/Tool'


function App() {
  return (
    <div className="App">
      <Tool/>
    </div>

  );
}

export default App;
