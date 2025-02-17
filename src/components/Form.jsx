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
        <form>
            <div className=" flex-col border-white border-2 rounded-md px-4 py-4 mx-4 my-4 w-2xl">
               <div className="my-10">
                   <div className="flex gap-34">
                       <div className="flex gap-4">
                           <label className="text-white">Name:</label>
                           <input type="text"  className="border-white border-2 rounded-md bg-white"/>
                        </div>
                       <div className="flex gap-4"><label className="text-white">Email: </label>
                       <input type="email" className="border-white border-2 rounded-md bg-white"/>
                   </div>
                   </div>
               </div>
               <div className="my-10">
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
               <div className="flex justify-center items-center"><button className="bg-white px-2 py-2 rounded-sm cursor-pointer" onClick={(event) => {
                event.preventDefault();
                setGetForm(0);
                console.log(getForm);}
               }>Submit</button></div>
            </div>
        </form>
        <Result name={name} email = {email} phone = {phone} prof={prof} />

        </>
)}
    else{
        return(
            <>
            <form>  
                    <div className=" flex-col border-white border-2 rounded-md px-4 py-4 mx-4 my-4 w-2xl">
                       <div className="my-10">
                           <div className="flex gap-34">
                               <div className="flex gap-4">
                                   <label className="text-white">Name:</label>
                                   <input type="text"  className="border-white border-2 rounded-md bg-white"/>
                                </div>
                               <div className="flex gap-4"><label className="text-white">Email: </label>
                               <input type="email" className="border-white border-2 rounded-md bg-white"/>
                           </div>
                           </div>
                       </div>
                       <div className="my-10">
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
                       <div className="flex justify-center items-center"><button className="bg-white px-2 py-2 rounded-sm cursor-pointer" onClick={(event) => {
                        event.preventDefault();
                        setGetForm(1);
                        console.log(getForm);
                       }}>Submit</button></div>
                    </div>
            </form>
            </>
    )}
    
}


export default Form