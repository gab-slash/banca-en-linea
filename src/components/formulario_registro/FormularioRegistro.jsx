import { useState } from "react";
import CampoEntradaInicio from "../campo_entrada_inicio/CampoEntradaInicio";
import BotonInicio from "../boton_inicio/BotonInicio";
import styles from "./FormularioRegistro.module.css";

function FormularioRegistro() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        document_number: "",
        birth_date: "",
        phone_number: "",
        email: "",
        password: "",
        confirm_password: ""
    });

    const [errores, setErrores] = useState({});
    const [errorGlobal, setErrorGlobal] = useState("");

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        setErrores({ ...errores, [id]: "" }); // Borra el error al escribir
    };

    const formatBirthDate = (date) => new Date(date).toISOString();

    const validarFormulario = () => {
        let nuevosErrores = {};
        if (formData.password !== formData.confirm_password) {
            nuevosErrores.confirm_password = "Las contraseñas no coinciden.";
            setErrorGlobal("Las contraseñas deben coincidir.");
        }
        return nuevosErrores;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorGlobal(""); // Limpia error global antes de validar

        let nuevosErrores = validarFormulario();
        setErrores(nuevosErrores);
        if (Object.keys(nuevosErrores).length > 0) return;

        const formattedData = { ...formData, birth_date: formatBirthDate(formData.birth_date) };
        console.log("Datos enviados:", formattedData);
    };

    return (
        <div className={styles.formularioRegistro}>
            <form onSubmit={handleSubmit} noValidate>
                <CampoEntradaInicio tipo="text" id="first_name" nombre="Nombre" placeholder="Escribe tu nombre" valor={formData.first_name} onChange={handleChange} error={errores.first_name} />
                <CampoEntradaInicio tipo="text" id="last_name" nombre="Apellido" placeholder="Escribe tu apellido" valor={formData.last_name} onChange={handleChange} error={errores.last_name} />
                <CampoEntradaInicio tipo="text" id="document_number" nombre="Documento" placeholder="Número de documento" valor={formData.document_number} onChange={handleChange} error={errores.document_number} />
                <CampoEntradaInicio tipo="date" id="birth_date" nombre="Fecha de nacimiento" valor={formData.birth_date} onChange={handleChange} error={errores.birth_date} />
                <CampoEntradaInicio tipo="tel" id="phone_number" nombre="Teléfono" placeholder="Número de teléfono" valor={formData.phone_number} onChange={handleChange} error={errores.phone_number} />
                <CampoEntradaInicio tipo="email" id="email" nombre="Correo" placeholder="Escribe tu correo" valor={formData.email} onChange={handleChange} error={errores.email} />
                <CampoEntradaInicio tipo="password" id="password" nombre="Contraseña" placeholder="Crea una contraseña" valor={formData.password} onChange={handleChange} error={errores.password} />
                <CampoEntradaInicio tipo="password" id="confirm_password" nombre="Confirmar contraseña" placeholder="Repite tu contraseña" valor={formData.confirm_password} onChange={handleChange} error={errores.confirm_password} />
                <div className={styles.contenedorBoton}>
                    <BotonInicio id="boton-registro" texto="Registrarse" />
                </div>

            </form>
            {errorGlobal && <p className={styles.errorGlobal}>{errorGlobal}</p>}
            <p className={styles.volver} onClick={() => window.location.href = "/"}>Volver</p>
        </div>
    );
}

export default FormularioRegistro;
