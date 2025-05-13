import { useState } from "react";
import CampoEntradaInicio from "../campo_entrada_inicio/CampoEntradaInicio";
import BotonInicio from "../boton_inicio/BotonInicio";
import { ErrorGlobal } from "../mensaje_error/MensajeError";
import "./FormularioInicio.css";

function FormularioInicio() {
    const [formData, setFormData] = useState({ usuario: "", password: "" });
    const [errores, setErrores] = useState({ usuario: "", password: "" });
    const [errorGlobal, setErrorGlobal] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value }); /* ✅ Se actualiza el estado */
        setErrores({ ...errores, [e.target.id]: "" }); /* ✅ Borra el error cuando escribe */
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorGlobal(""); // Limpia error global antes de validar
        let nuevosErrores = {};

        // 🔹 Validación de campos vacíos
        if (!formData.usuario.trim()) nuevosErrores.usuario = "El correo es obligatorio.";
        if (!formData.password.trim()) nuevosErrores.password = "La contraseña es obligatoria.";

        setErrores(nuevosErrores);

        // 🔹 Si hay errores, muestra el mensaje global
        if (Object.keys(nuevosErrores).length > 0) {
            setErrorGlobal("Los campos no pueden estar vacíos.");
            return;
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} id="formulario" noValidate>
                <CampoEntradaInicio 
                    tipo="text" 
                    id="usuario" 
                    nombre="Correo" 
                    placeholder="Escribe tu correo" 
                    valor={formData.usuario} 
                    onChange={handleChange} 
                    error={errores.usuario}
                />
                <CampoEntradaInicio 
                    tipo="password" 
                    id="password" 
                    nombre="Contraseña" 
                    placeholder="Escribe tu contraseña" 
                    valor={formData.password} 
                    onChange={handleChange} 
                    error={errores.password}
                />
                <BotonInicio texto="Iniciar Sesión" />
            </form>
            <ErrorGlobal mensaje={errorGlobal} onClose={() => setErrorGlobal("")} />
        </>
    );
}

export default FormularioInicio;
