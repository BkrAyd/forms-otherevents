import React, { useState } from 'react'

const MouseEvent = () => {
    const [visible, setvisible] = useState(false)
    const [coordX, setcoordX] = useState("")
    const [coordY, setcoordY] = useState("")

    const handleDoubleClick=(e)=>e.target.classList.toggle("bg-danger")
    const handleMouseMove=(e)=>{
        setcoordX(e.nativeEvent.offsetX)
        setcoordY(e.nativeEvent.offsetY)
    }

  return (
    <div className="container text-center d-flex flex-column align-items-center mt-4">
    <h2 className="text-danger">MOUSE EVENTS</h2>
    <div
      onMouseOver={()=>setvisible(true)}
      onMouseLeave={()=>setvisible(false)}
      id="todo-1"
      className="bg-success text-light w-50 p-4"
    >
      onMouseOver & onMouseLeave
    </div>
    {visible && <p>Mouse üzerimde</p> }
    <div
      onDoubleClick={handleDoubleClick}
      id="todo-2"
      className="bg-success text-light w-50 p-4 mt-4"
    >
      onDoubleClick
    </div>
    <div
      onMouseMove={handleMouseMove}
      id="todo-3"
      className="bg-success text-light w-50 p-4 my-4"
    >
      <span>onMouseMove</span>
    </div>
    <div
      onMouseOver={handleMouseMove}
      id="todo-4"
      className="bg-success text-light w-50 p-4 my-4"
    >
      <span>onMouseOver</span>
    </div>
    <div
      onMouseEnter={handleMouseMove}
      id="todo-5"
      className="bg-success text-light w-50 p-4 my-4"
    >
      <span>onMouseEnter</span>
    </div>
    X:{coordX} and Y:{coordY}
  </div>
  )
}

export default MouseEvent