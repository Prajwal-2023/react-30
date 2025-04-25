import { useEffect, useRef, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";

function InlineEditable() {

    const [items, setItems] = useState([
        { id: 1, name: "userName" },
        { id: 2, name: "userLastName" }
    ]);

    const [currentText,setCurrentText] = useState(null)
    const [currentId,setCurrentId] = useState(null)
    const inputRef = useRef(null)

    function handleInput(id,name){
        setCurrentId(id)
        setCurrentText(name)
    }

    useEffect(()=>{
        if(currentId !== null && inputRef.current){
            inputRef.current.focus()
        }
    },[currentId])
    
    function handleBlur(event){
        if(currentId !== null){
            saveChanges()
        }
    }
    function handleKeyDown(event){
        if(event.key === "Enter"){
            saveChanges()
        } else if(event.key === "Escape"){
            setCurrentId(null)
        }

    }

    function saveChanges(){
        if(currentId !== null){
            setItems(items.map(item=> item.id === currentId ? 
                    {...item, name:currentText} : item))
                    setCurrentId(null)
                }
    }   

    return (
        <div className="w-[400px]">
            {/* <input type="text" placeholder="Type here" className="input border-red-700 bg-amber-200 w-[100%] " /> */}
            {items.map(item => (
                currentId === item.id ?
                <input key={item.id} type="text" placeholder="Type here" className="input border-red-700 bg-amber-200 w-[100%] mb-3" 
                ref={inputRef}
                onChange={(e)=>setCurrentText(e.target.value)}
                value={currentText}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
               
                />  : 
                <div className="w-[100%] bg-green-400 flex items-center justify-between px-2 py-2 mb-3 overflow-x-auto" key={item.id} onClick={()=>handleInput(item.id,item.name)}>
                    <h1 key={item.id} >{item.name}</h1>
                    <FaPencilAlt className="cursor-pointer"/>
                </div>
            ))} 
        </div>
    )
}

export default InlineEditable