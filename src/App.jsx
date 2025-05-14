import "./App.css"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InicioSesion from "./pages/InicioSesion";
import Registro from "./pages/Registro";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<InicioSesion />} />  {/* ✅ Esta línea define la ruta principal */}
                <Route path="/registrarse" element={<Registro />} /> 
            </Routes>
        </Router>
    );
}

export default App;
