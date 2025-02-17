import React from "react";

function Result({name,email,phone,prof}){
return(
    <div className="flex flex-col border-white border-2 rounded-sm w-2xl mx-3.75 h-100">
        <div className="text-white">Name: {name}</div>
    </div>

)
}

export default Result