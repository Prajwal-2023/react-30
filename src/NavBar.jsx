import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import UndoRedo from "./Projects/UndoRedo";
function NavBar() {
    return (
        <>
            <Router>
                <nav className="navbar w-screen bg-base-100 shadow-sm absolute top-0 left-0 right-0 felx flex-col">
                    <Link className="text-xl  btn btn-dash btn-primary mb-4" to="/">Home Page</Link>
                    <div className="btn-container">
                    <Link to="/undo-redo"><button className="btn btn-secondary min-h-[2rem] w-auto h-auto">Undo Redo Project</button></Link>
                    </div>
                </nav>
                <Routes>
                    <Route path="/undo-redo" element={<UndoRedo />} />
                </Routes>
            </Router>
        </>
    )
}
export default NavBar;