import React, {useState} from 'react'
// import {link} from 'react-router-dom';

export default function About(props) {
    // const  [myStyle,setMystyle] = useState({
    //     color:'black',
    //     backgroundColor: 'white'
    // })
    
    // const [btnText,setBtnText] = useState("Enable dark mode2")

    // let toggleStyle =()=>{
    //   if(myStyle.color === 'black'){
    //     setMystyle({
    //       color:'white',
    //       backgroundColor:'black',
    //       border:'1px solid white'
    //     })
    //     setBtnText("Enable light mode")
    //   }
    //   else{
    //     setMystyle({
    //       color:'black',
    //       backgroundColor:'white'
    //     })
    //     setBtnText("Enable dark mode")
    //   }
    // }

    let myStyle = {
      color: props.mode ==='dark'?'White':'black',
      backgroundColor:props.mode ==='dark'?'black':'white',
      border:'1px solid',
      borderColor:'white'
    }


  return (
    <div className={`container text-${props.mode === 'light'?'dark':'light'} my-20`} >
        <h2>About Us</h2>
      <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div style={myStyle} className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" style={myStyle} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>

    </div>
  )
}
