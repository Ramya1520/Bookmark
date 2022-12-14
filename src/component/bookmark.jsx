import React from 'react';
import './bookmark.css';
function Inputfield(){
    console.log("hi")
    return(
        <div> 
        <form>
            <h1>BookMark:</h1>
           <p></p><span>url:</span><input type="text"className='url'/><br/><p></p>

           <span>type:</span><input type="text" className='type'/><br/>

           <p><input type="button" value="Submit" /></p>
      </form>
      </div>  
    )
}
export default Inputfield