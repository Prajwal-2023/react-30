import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./HomePage";
import UndoRedo from "./Projects/UndoRedo";
import CloseDropDown from "./Projects/CloseDropDown";
import InlineEditable from "./Projects/InlineEditable";
function NavBar() {
    return (
        <>
            <Router>
                <nav className="navbar w-screen bg-base-100 shadow-sm absolute top-0 left-0 right-0 felx flex-col">
                    <Link className="text-xl  btn btn-dash btn-primary mb-4" to="/">Home Page</Link>
                    <div className="btn-container">
                    <Link to="/undo-redo"><button className="btn btn-secondary min-h-[2rem] w-[100%]">Undo Redo Project</button></Link>
                    <Link to="/close-dropdown"><button className="btn btn-secondary min-h-[2rem] w-[100%]">Close-dropdown Project</button></Link>
                    <Link to="/inline-edit-input"><button className="btn btn-secondary min-h-[2rem] w-[100%]">Inline Edit Input Project</button></Link>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/undo-redo" element={<UndoRedo />} />
                    <Route path="/close-dropdown" element={<CloseDropDown />} />
                    <Route path="/inline-edit-input" element={<InlineEditable />} />
                </Routes>
            </Router>
        </>
    )
}
export default NavBar;