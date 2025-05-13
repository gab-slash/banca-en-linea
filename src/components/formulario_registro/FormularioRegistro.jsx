import { useState } from "react";
import CampoEntradaInicio from "../campo_entrada_inicio/CampoEntradaInicio";
import BotonInicio from "../boton_inicio/BotonInicio";
import "./FormularioRegistro.css";

function FormularioRegistro() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        document_number: "",
        birth_date: "",
        phone_number: "",
        email: "",
        password: "",
        confirm_password: "" /* ✅ Nuevo campo de confirmación */
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // 🔹 Convertir la fecha al formato correcto antes de enviarla
    const formatBirthDate = (date) => new Date(date).toISOString();

    const handleSubmit = (e) => {
        e.preventDefault();

        // ✅ Verifica que la contraseña y la confirmación coincidan
        if (formData.password !== formData.confirm_password) {
            alert("Las contraseñas no coinciden. Inténtalo de nuevo."); 
            return;
        }

        const formattedData = { ...formData, birth_date: formatBirthDate(formData.birth_date) };
        console.log("Datos enviados:", formattedData); // 🔹 Simulación de envío
    };

    return (
    <>
        <form onSubmit={handleSubmit} id="formulario-registro" noValidate>
            <CampoEntradaInicio tipo="text" id="first_name" nombre="Nombre" placeholder="Escribe tu nombre" valor={formData.first_name} onChange={handleChange} />
            <CampoEntradaInicio tipo="text" id="last_name" nombre="Apellido" placeholder="Escribe tu apellido" valor={formData.last_name} onChange={handleChange} />
            <CampoEntradaInicio tipo="text" id="document_number" nombre="Documento" placeholder="Número de documento" valor={formData.document_number} onChange={handleChange} />
            <CampoEntradaInicio tipo="date" id="birth_date" nombre="Fecha de nacimiento" placeholder="Selecciona tu fecha de nacimiento" valor={formData.birth_date} onChange={handleChange} />
            <CampoEntradaInicio tipo="tel" id="phone_number" nombre="Teléfono" placeholder="Número de teléfono" valor={formData.phone_number} onChange={handleChange} />
            <CampoEntradaInicio tipo="email" id="email" nombre="Correo" placeholder="Escribe tu correo" valor={formData.email} onChange={handleChange} />
            <CampoEntradaInicio tipo="password" id="password" nombre="Contraseña" placeholder="Crea una contraseña" valor={formData.password} onChange={handleChange} />
            <CampoEntradaInicio tipo="password" id="confirm_password" nombre="Confirmar contraseña" placeholder="Repite tu contraseña" valor={formData.confirm_password} onChange={handleChange} />
            <BotonInicio texto="Registrarse" />
        </form>

        {/* ✅ Agregar opción "Volver" */}
        <p className="volver" onClick={() => window.location.href = "/"}>Volver</p>
    </>
    );
}

export default FormularioRegistro;
