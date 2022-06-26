import React, { useState } from 'react';
 
const AvastHover = ({elem}) => {
  const [isActive, setIsActive] = useState(false);
 
  return (
    <div className="avast-item">
      <div className="avast-title" onClick={() => setIsActive(!isActive)}>
        <div className='avast_titel'>{elem.title}</div>
          <div className='avast_icon'>{isActive ? 'x' : '+'}</div>
          
      </div>
      {isActive && <>
      <div className="avast-content">{elem.content}</div>
      
      {elem.list && elem.list.length?
        <ul className='avast_ul'>
          {elem.list.map( e=>{
            return <li>{e}</li>
          })}
        </ul>
      :null}
      </>}
    </div>
  );
};
 
export default AvastHover;