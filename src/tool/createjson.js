import React ,{useState,useEffect} from 'react'
import MultiActionAreaCard from '../base_components/card';
import Draggable from 'react-draggable'
import Button from '../base_components/button'
const data = require('./data.json');


let webjson = {'comp':{
  'attributes':{},
  'children': []
}}

export const onDragStart = (e) => {
    console.log("Drag started")
}
export const onDragEnter = (e,msg) => {
    console.log(msg)
}
export const onDragEnd = (e) => {
    
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    console.log('drag end')
    webjson['children'].push({})
    console.log(x,y)
}
export const onDragOver = (e) => {
    e.preventDefault()
}
function createjson() {
  return (
    <div>createjson</div>
  )
}



function Screen() {

  function applyBorder(e) {
    e.target.style.borderStyle = 'dashed';
  }
  function removeBorder(e) {
    e.target.style.borderStyle = 'none';
  }

  const [positions, setPositions] = useState(() => {
    const positions = localStorage.getItem('positions');
    return positions ? JSON.parse(positions) : {'x':0,'y':0};
  });

  useEffect(() => {
    localStorage.setItem('positions', JSON.stringify(positions));
  }, [positions]);

  function updatePositions(e,data){
      console.log(data);
      setPositions({'x':data.x ,'y':data.y})

     
  }
  return (
    <div onMouseOver={(e)=>{applyBorder(e)}} onMouseOut={removeBorder} style={{height:'100vh'}}>
      <Draggable>
      <div style={{backgroundColor:'lightcoral'}}>
            <Button/>
        </div>

      </Draggable>
      <Draggable defaultPosition={{x: positions.x, y: positions.y}} bounds = 'parent' onStop={updatePositions} >
            
        <div style={{backgroundColor:'lightcoral',display: 'inline-grid'}}>
            <MultiActionAreaCard/>
        </div>

      </Draggable>
           
    </div>

    
  )
}

export default Screen;