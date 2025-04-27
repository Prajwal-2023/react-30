import { useEffect, useRef, useState } from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

function InlineEditable() {

    const [details, setDetails] = useState([
        {
            id: 1,
            name: "Username"
        },
        {
            id: 2,
            name: "Email"
        }
    ])

    const [newStoreID, setNewStoreID] = useState(null)
    const [newStoreValue, setNewStoreValue] = useState(null)
    const inputRef = useRef(null)

    const handleClick = (id, name) => {
        setNewStoreID(id)
        setNewStoreValue(name)
    }
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            saveChanges()
        } else if (event.key === "Escape") {
            setNewStoreID(null)
        }
    }

    const saveChanges = () => {
        if (newStoreID !== null) {
            setDetails(
                details.map((deta) =>
                    deta.id === newStoreID ?
                        { ...deta, name: newStoreValue } :
                        deta
                ));
        }
        setNewStoreID(null)
    }

    const handleDeleteClick = (id) => {
        setDetails(details.filter(item => item.id !== id));
    };

    useEffect(() => {
        if (newStoreID !== null && inputRef.current) {
            inputRef.current.focus()
        }
    }, [newStoreID])
    return (
        <div className="w-[400px]">
            {/* <input type="text" placeholder="Type here" className="input border-red-700 bg-amber-200 w-[100%] " /> */}

            {details.map(detail => {

                return (
                    newStoreID === detail.id ?
                        <input type="text" placeholder="Type here" className="input border-red-700 bg-amber-200 w-[100%] mb-3"
                            value={newStoreValue}
                            key={detail.id}
                            onChange={(e) => setNewStoreValue(e.target.value)}
                            ref={inputRef}
                            onKeyDown={handleKeyDown}

                        />
                        :
                        <div className="w-[100%] bg-green-400 flex items-center justify-between px-2 py-2 mb-3 overflow-x-auto"
                            key={detail.id}>
                            <h1>{detail.name}</h1>
                            <div className="flex gap-3"> 
                                <FaPencilAlt className="cursor-pointer" onClick={() => handleClick(detail.id, detail.name)} />
                                <FaTrash 
                                key={detail.id}
                                className="cursor-pointer"
                                onClick={()=>handleDeleteClick(detail.id)}
                                />
                            </div>
                        </div>
                )
            })}

        </div >
    )
}

export default InlineEditable