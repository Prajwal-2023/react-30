import { useEffect, useRef, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";

function InlineEditable() {

    const [items, setItems] = useState([
        { id: 1, name: "userName" },
        { id: 2, name: "userLastName" }
    ]);

    const [showInput,setShowInput] = useState(false)
    const [currentText,setCurrentText] = useState(null)
    const [currentId,setCurrentId] = useState(null)

    function handleInput(id,name){
        setCurrentId(id)
        setCurrentText(name)

        if(currentId === id){
            setShowInput(true)
        }
    }
    
    return (
        <div className="w-[400px]">
            {/* <input type="text" placeholder="Type here" className="input border-red-700 bg-amber-200 w-[100%] " /> */}
            <h1>{currentText}</h1>
            <h1>{currentId}</h1>
            {items.map(item => (
                showInput ? <input key={item.id} type="text" placeholder="Type here" className="input border-red-700 bg-amber-200 w-[100%] " />  : 
                <div className="w-[100%] bg-green-400 flex items-center justify-between px-2 py-2 mb-3" key={item.id}>
                    <h1 key={item.id} >{item.name}</h1>
                    <FaPencilAlt className="cursor-pointer"  onClick={()=>handleInput(item.id,item.name)}/>
                </div>
            ))} 
        </div>
    )
}

export default InlineEditable