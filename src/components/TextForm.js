import React,{useState} from 'react';

import '../App.css';

export default function TextForm(props) {
    const handlUpClick=()=>{
        let newText=text.toUpperCase();
        settext(newText);
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        settext(newText);
    }
    
    const handleReClick=()=>{
        let newText = text.split("").reverse().join("");
        settext(newText);
    }
    
    const handleEsClick=()=>{
        let newText=text.split(/[ ]+/).join(" ");
        settext(newText);
    }
    
    const handleCpClick=()=>{
        var text = document.getElementById("floatingTextarea");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    
    const handleClClick=()=>{
        let newText=("");
        settext(newText);
    }

    const handleOnChange=(event)=>{
        settext(event.target.value);
    }
    const [text,settext]=useState('');
  return (
    <div>
        <h1 className='heading'>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="floatingTextarea" rows="8"></textarea>
        </div>
        <div className='buttons'>
        <button className="btn btn-primary mx-2 my-2" onClick={handlUpClick}>Convert To Uppercase</button>
        <button className="btn btn-secondary mx-2 my-2" onClick={handleLoClick}>Convert To LowerCase</button>
        <button className="btn btn-success my-2 mx-2" onClick={handleReClick}>Convert to Reverse</button>
        <button className="btn btn-danger mx-2 my-2" onClick={handleEsClick}>Remove Extra Spaces</button>
        <button className="btn btn-warning my-2 mx-2" onClick={handleCpClick}>Copy Text</button>
        <button className="btn btn-info mx-2 my-2" onClick={handleClClick}>Clear Text</button>
        </div>
        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} Words And {text.length} Character</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes To Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing To Preview"}</p>
        </div>
    </div>
  )
}


