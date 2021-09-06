import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleclearClick = ()=>{
        
        let newText = '';
        setText(newText)
    }
    const removeExtrSpace =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }  

    const handleOnChange = (event)=>{
    
        setText(event.target.value)
    }

    const [text, setText] = useState(''); 
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear</button>
            <button className="btn btn-primary mx-1" onClick={removeExtrSpace}>Remove Extra Space</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
