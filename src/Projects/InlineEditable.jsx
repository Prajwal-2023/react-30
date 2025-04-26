import { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";

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
    const [storeId, setStoreId] = useState(null)
    const [storeName, setStoreName] = useState(null)
    const handleClick = (id, name) => {
        setStoreId(id)
        setStoreName(name)
    }
    console.log(storeId, storeName);

    return (
        <div className="w-[400px]">
            {/* <input type="text" placeholder="Type here" className="input border-red-700 bg-amber-200 w-[100%] " /> */}



            {details.map((detail) => {
                return (
                    storeId === detail.id ?
                        <input type="text" placeholder="Type here" className="input border-red-700 bg-amber-200 w-[100%] mb-3"
                        /> :
                        <div className="w-[100%] bg-green-400 flex items-center justify-between px-2 py-2 mb-3 overflow-x-auto"
                            key={detail.id} >
                            <h1>{detail.name}</h1>
                            <FaPencilAlt className="cursor-pointer"
                                onClick={() => handleClick(detail.id, detail.name)}
                            />
                        </div>)
                        }
            )}
        </div >
    )
}

export default InlineEditable