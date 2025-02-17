import React, { useState } from "react";
import Result from "./Result";

function Form(){
    const [getForm,setGetForm] = useState(0);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [prof,setProf] = useState("");



    if(getForm){
        return(
    <>
        
        <Result name={name} email = {email} phone = {phone} prof={prof} reset={() => {
            setGetForm(0);
            setName(name);
            setEmail(email);
            setPhone(phone);
            setProf(prof);
        }}/>

        </>
)}
    else{
        return(
            <>
            <form onSubmit={(event) => {event.preventDefault;}}>  
                    <div className=" flex-col border-white border-2 rounded-md px-4 py-4 mx-4 my-4 w-2xl bg-gray-800">
                       <div className="my-10">
                           <div className="flex gap-34">
                               <div className="flex gap-4">
                                   <label className="text-white">Name:</label>
                                   <input type="text"  className="border-white border-2 rounded-md bg-white"  name="name" value = {name} onChange={(event) => {setName(event.target.value)}}/>
                                </div>
                               <div className="flex gap-4"><label className="text-white">Email: </label>
                               <input type="email" className="border-white border-2 rounded-md bg-white"  name="email" value = {email} onChange={(event) => {setEmail(event.target.value)}}/>
                           </div>
                           </div>
                       </div>
                       <div className="my-10">
                           <div className="flex gap-25">
                               <div className="flex gap-4">
                                   <label className="text-white">Phone:</label>
                                   <input type="number"  className="border-white border-2 rounded-md bg-white"  name="phone" value = {phone} onChange={(event) => {setPhone(event.target.value)}}/>
                                </div>
                               <div className="flex gap-4"><label className="text-white">Job Profile: </label>
                               <input type="text" className="border-white border-2 rounded-md bg-white"   name="prof" value = {prof} onChange={(event) => {setProf(event.target.value)}}/>
                           </div>
                           </div>
                       </div>
                       <div className="flex justify-center items-center"><button className="bg-white px-2 py-2 rounded-sm cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110" onClick={(event) => {
                event.preventDefault();
                setGetForm(1);
                console.log(getForm);
                event.target.reset();
                    
            }}>Submit</button></div>
                    </div>
            </form>
            </>
    )}
    
}


export default Form