import { useState } from "react"

function UndoRedo() {

    const [history,setHistory] = useState([0])
    const [idxPosition,setIdxPosition] = useState(0)

    const currentValue = history[idxPosition]
    

    const updateHistory = (newValue)=>{
        const updatedValue = [...history.slice(0,idxPosition + 1),newValue]
        setHistory(updatedValue);
        setIdxPosition(idxPosition + 1)
    }

    const decreament = () => {
        updateHistory(currentValue - 1)
    }
    const increment = () => {
        updateHistory(currentValue + 1)
    }

    const undo = ()=>{
        setIdxPosition(idxPosition - 1)
        console.log(idxPosition);
    }
    const redo = ()=>{
        setIdxPosition(idxPosition + 1)
        console.log(idxPosition);
    }

    return (
        <div className="flex flex-col bg-zinc-200 border-blue-600 border-[2px] rounded-[1rem] justify-center align-center w-[300px] h-[300px] text-center gap-3">
            <h1 className="text-zinc-800">Counter with Undo & Redo</h1>
            <p className="text-zinc-800 text-[3rem]">{currentValue}</p>
            <div className=" flex gap-1 align-center justify-center">
                <button className="btn btn-secondary w-[3rem] cursor-pointer text-[2rem]" onClick={decreament}>-</button>
                <button className="btn btn-primary w-[3rem] cursor-pointer text-[2rem]" onClick={increment}>+</button>
            </div>

            <div className="flex gap-4 align-center justify-center">
                <div>
                    <button className="btn btn-soft w-[2rem] h-[1.5rem] cursor-pointer text-[1rem]"
                    onClick={undo}
                    disabled={idxPosition === 0}
                    >
                        ↩
                    </button>
                    <pre className="text-zinc-800">undo</pre>
                </div>
                <p className="text-zinc-800">{idxPosition}/{history.length - 1}</p>

                <div>
                    <button className="btn btn-soft w-[2rem] h-[1.5rem] cursor-pointer text-[1rem]"
                    onClick={redo}
                    disabled={history.length - 1 === idxPosition }
                    >
                        ↪
                    </button>
                    <pre className="text-zinc-800">redo</pre>
                </div>
            </div>
        </div>
    )
}
export default UndoRedo
