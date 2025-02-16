import React from "react";

function Form(){
    return(
        <div className=" flex-col border-white border-2 rounded-md px-4 py-4 mx-4 my-4 w-2xl">
           <div>
               <div className="flex gap-25">
                   <div className="flex gap-4">
                       <label className="text-white">Name:</label>
                       <input type="text"  className="border-white border-2 rounded-md bg-white"/>
                    </div>   
                   <div className="flex gap-4"><label className="text-white">Email: </label>
                   <input type="email" className="border-white border-2 rounded-md bg-white"/>
               </div>
               </div>
           </div>
           <div>
               <div className="flex gap-25">
                   <div className="flex gap-4">
                       <label className="text-white">Phone:</label>
                       <input type="number"  className="border-white border-2 rounded-md bg-white"/>
                    </div>   
                   <div className="flex gap-4"><label className="text-white">Job Profile: </label>
                   <input type="text" className="border-white border-2 rounded-md bg-white"/>
               </div>
               </div>
           </div>
        </div>

    )
}


export default Form