import React from "react";

function Result({name,email,phone,prof,reset}){
return(
    <div className="flex flex-col border-white border-2 rounded-sm w-2xl mx-3.75 my-4 h-100 px-5 py-5 gap-10  bg-gray-800">
        <div className="text-white text-3xl">Name: {name}</div>
        <div className="text-white text-3xl">Email: {email}</div>

        <div className="text-white text-3xl">Phone: {phone}</div>

        <div className="text-white text-3xl">Job Profile: {prof}</div>

        <div className="flex items-center justify-center"><button className="bg-white px-2 py-2 rounded-sm cursor-pointer w-20 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" onClick={reset}>Edit</button></div>

    </div>

)
}

export default Result