import { useState , useEffect} from "react";
import { FaChevronDown  } from "react-icons/fa";
function CloseDropDown(){

    const [texts,setTexts] = useState([
        {
            id:1,
            text:"Option One"
        },
        {
            id:2,
            text:"Option Two"
        },
        {
            id:3,
            text:"Option Three"
        },
        {
            id:4,
            text:"Option Four"
        },
        {
            id:5,
            text:"Option Five"
        },
    
    ]
    )

    const [isOpen,setIsOpen] = useState(false)
    const [label,setLabel] = useState("Options")

    const toggleParent = () =>{
        !isOpen ? setIsOpen(true) : setIsOpen(false)
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
          if (e.target.nodeName === "BODY") {
            setIsOpen(false);
          }
        };
      
        document.addEventListener("click", handleClickOutside);
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, []);

      const changeValue = (e)=>{
        setLabel(`You Selected : ${e.target.innerText}`);
        setIsOpen(false);
    }
    return(

        <>
        <h1 className="text-2xl text-center">Close DropDown On Out Focus Project</h1>
            <div className="w-[30rem] relative mt-10">
                <div className="option_div w-[100%] h-[3rem] rounded-tl-[0.5rem] rounded-tr-[0.5rem] bg-zinc-700 flex items-center justify-between pl-2 pr-10"> 
                   <h1 className="text-white">{label}</h1>
                   <FaChevronDown className={
                    ` transition-transform duration-300 fill-white ${isOpen ? 'rotate-180' : 'rotate-0'} cursor-pointer`} onClick={toggleParent} />
                </div>
                {/* <div className={`bg-white ${isOpen ? 'border-black border-[1px] ' : 'border-0' }  py-3 absolute w-full shadow-md`}> */}
                <div className={`bg-white ${isOpen ? "py-3" : "py-0"} absolute w-full shadow-md`}>
                   {isOpen ? texts.map((text,idx)=>{
                       return(
                           <li key={idx} className="list-decimal pl-2 hover:bg-zinc-400 cursor-pointer" onClick={changeValue}>{text.text}</li>
                        )
                    }) : ""
                }
                </div>
            </div>
        </>

    )


}
export default CloseDropDown;