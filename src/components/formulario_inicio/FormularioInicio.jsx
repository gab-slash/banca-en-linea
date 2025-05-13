import { useState } from "react";
import CampoEntradaInicio from "../campo_entrada_inicio/CampoEntradaInicio";
import BotonInicio from "../boton_inicio/BotonInicio";
import { ErrorGlobal } from "../mensaje_error/MensajeError";
import styles from "./FormularioInicio.module.css";

function FormularioInicio() {
    const [formData, setFormData] = useState({ usuario: "", password: "" });
    const [errores, setErrores] = useState({ usuario: "", password: "" });
    const [errorGlobal, setErrorGlobal] = useState("");

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        setErrores({ ...errores, [id]: "" }); // Borra el error al escribir
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorGlobal(""); // Limpia error global antes de validar
        let nuevosErrores = {};

        if (!formData.usuario.trim()) nuevosErrores.usuario = "El correo es obligatorio.";
        if (!formData.password.trim()) nuevosErrores.password = "La contraseña es obligatoria.";

        setErrores(nuevosErrores);

        if (Object.keys(nuevosErrores).length > 0) {
            setErrorGlobal("Los campos no pueden estar vacíos.");
            return;
        }
    };

    return (
        <div className={styles.formularioInicio}>
            <form className={styles.formularioIS} onSubmit={handleSubmit} noValidate>
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
            {errorGlobal && <ErrorGlobal mensaje={errorGlobal} onClose={() => setErrorGlobal("")} />}
        </div>
    );
}

export default FormularioInicio;
