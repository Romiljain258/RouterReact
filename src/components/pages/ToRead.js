import React from "react";
import data2 from "../json/data2.json";

function ToRead(){
    return(
        <div className="container pt-4">
                 <div className="row">
              <div class="col">
               </div>
            <div className=" col block">
        {data2.map(post=>{
            return(
                <div key={post.id}>
                    <img className="upper " src={post.image} alt="img" />
                    <img className="lower " src={post.image1} alt="img" />
                    <h4 className="text">{post.text}</h4>
                </div>
            )
        })}
        </div>
        <div class="col">
               </div>    
        </div> 
        </div> 
    )
}

export default ToRead;