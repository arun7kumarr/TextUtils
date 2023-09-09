import React from 'react'

export default function Aleret(props) {
    const capitalize =(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
    <div style={{height:'50px'}}>
      {props.aleret && <div className={`alert alert-${props.aleret.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(props.aleret.type)} </strong>{props.aleret.msg}
      </div>}
    </div>
    
  )
}
