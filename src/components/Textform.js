import React, {useState} from 'react'


export default function Textform(props) {
  const [text,setText] = useState('');
  // text="new text"; //wrong way to change the state
  // setText("new text");//correct way to change the state

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAleret("Converted to Uppercase","success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAleret("Converted to Lowercase","success");
    }
    const handleClrClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAleret("Text cleared","success");
    }
    
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handleCopy =()=>{
      // var text = document.getElementById("myBox");
      // text.select();
      navigator.clipboard.writeText(text);
      // document.getSelection().removeAllRanges();
      props.showAleret("Copied to clipboard","success");
    }

    const handleExtraSpaces = ()=>{
      var newText = text.split(/{ }+/);
      setText(newText.join(" "));
      props.showAleret("Extra spaces removed","success");
    }

   
  return (
    <>
    <div >
        <h2 className={`text-${props.mode === 'light'?'dark':'light'}` }>{props.heading}</h2>
        <div className="mb-3">
           <textarea className={`form-control text-${props.mode === 'light'?'dark':'light'} bg-${props.mode === 'light'?'light':'dark'}` } value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
        </div>
        <button className="btn btn-primary" disabled={text.length===0} onClick={handleUpClick}>Converet To Upercase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleLoClick}>Converet To Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleClrClick}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className={`container text-${props.mode === 'light'?'dark':'light'}`}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words , {text.length} Character</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes To Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>

    </div>
    </>
  )
}
