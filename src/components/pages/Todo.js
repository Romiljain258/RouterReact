import React from "react";
import data1 from "../json/data1.json";

function Todo(){
    return(
        <div className=" parent container-fluid">
            <div className=" row mb-0 pb-0">
               <div className="col">
               </div>
            <div className=" child col-lg-2 mt-4"> 
                 {data1.map(post=>{
                    return(
                    <div key={post.id} className=" mt-2 p1">
                        <div>
                           <h5 className=" mt-1 firstLine">{post.todo}</h5>
                        </div>
                        <div>
                           <h6 className="secondLine">{post.forAnyspecific}</h6>
                        </div>
                        <div>
                           <p className="thirdLine">{post.timing}</p>
                        </div>
                    </div>
                         )
                })};
            </div>
        <div className="col">
    </div>
        </div>
        </div>
      
    )
}

export default Todo;