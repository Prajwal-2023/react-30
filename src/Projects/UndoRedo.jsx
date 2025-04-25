import { useState } from "react"

function UndoRedo() {

    const [history, setHistory] = useState([0]);
    const [position, setPosition] = useState(0)

    const currentValue = history[position]


    const updateHistory = (newVlaues) => {
        const udpatedValue = [...history.slice(0, position + 1), newVlaues]
        setHistory(udpatedValue)
        setPosition(position + 1)
        return udpatedValue
    }

    const decreament = () => {
        updateHistory(currentValue - 1);
    }
    const increment = () => {
        updateHistory(currentValue + 1);
    }

    const undo = () => {
        if(position > 0)
        setPosition(position - 1)
    }
    const redo = () => {
        if(position < history.length - 1)
        setPosition(position + 1)
    }

    return (
        <>
            <div className="flex flex-col bg-zinc-200 border-blue-600 border-[2px] rounded-[1rem] justify-center align-center w-[300px] h-[300px] text-center gap-3">
                <h1 className="text-zinc-800">Counter with Undo & Redo</h1>
                <p className="text-zinc-800 text-[3rem]">{currentValue}</p>
                <div className=" flex gap-1 align-center justify-center">
                    <button className="btn btn-secondary w-[3rem] cursor-pointer text-[2rem]"
                        onClick={decreament}
                    >-</button>
                    <button className="btn btn-primary w-[3rem] cursor-pointer text-[2rem]"
                        onClick={increment}
                    >+</button>
                </div>

                <div className="flex gap-4 align-center justify-center">
                    <div>
                        <button className="btn btn-soft w-[2rem] h-[1.5rem] cursor-pointer text-[1rem]"
                            onClick={undo}
                            disabled={position === 0}
                        >
                            ↩
                        </button>
                        {position === 0 ? "" :
                            <pre className="text-zinc-800">undo</pre>}
                    </div>
                    <p className="text-zinc-800">{position}/{history.length - 1}</p>

                    <div>
                        <button className="btn btn-soft w-[2rem] h-[1.5rem] cursor-pointer text-[1rem]"
                            onClick={redo}
                            disabled={history.length - 1 === position}
                        >
                            ↪
                        </button>
                        {history.length - 1 === position ? "" :
                            < pre className="text-zinc-800">redo</pre>}
                    </div>
                </div>
            </div >
        </>
    )
}
export default UndoRedo
