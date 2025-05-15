import { useState } from "react";
import CampoEntradaInicio from "../campo_entrada_inicio/CampoEntradaInicio";
import BotonInicio from "../boton_inicio/BotonInicio";
import { ErrorGlobal } from "../mensaje_error/MensajeError";
import styles from "./FormularioInicio.module.css";
import { loginAPI } from "../../api/modules/index";
import { useNavigate } from "react-router-dom"; 
import { setJWT } from "../../utils/localStorage";



function FormularioInicio() {
  const [formData, setFormData] = useState({ usuario: "", password: "" });
  const [errores, setErrores] = useState({ usuario: "", password: "" });
  const [errorGlobal, setErrorGlobal] = useState(""); 
  const navigate = useNavigate();  


  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
    setErrores((prevErrores) => ({
      ...prevErrores,
      [id]: "",
    })); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorGlobal("");
    let nuevosErrores = {};

    if (!formData.usuario.trim()) {
        nuevosErrores.usuario = "El correo es obligatorio.";
    }
    if (!formData.password.trim()) {
        nuevosErrores.password = "La contraseña es obligatoria.";
    }

    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length > 0) return;

    try {
        const datosLogin = { email: formData.usuario, password: formData.password };
        const response = await loginAPI(datosLogin);

        if (response.data && response.data.jwt) {
            setJWT(response.data.jwt); 
            console.log("JWT guardado correctamente!");
            navigate("/home"); 
        }


        if (response.message === "Usuario no autorizado, credenciales incorrectas") {
            setErrorGlobal(response.message);
        } else if (response.errors) {
            let nuevosErroresAPI = {};
            response.errors.forEach((error) => {
                if (error.field) {
                    nuevosErroresAPI[error.field] = error.message;
                } else {
                    setErrorGlobal(error.error);
                }
            });
            setErrores(nuevosErroresAPI);
        }
    } catch (error) {
        console.error("Error en la solicitud:", error);
        setErrorGlobal("Ocurrió un problema al conectar con el servidor.");
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
      {errorGlobal && (
        <ErrorGlobal mensaje={errorGlobal} onClose={() => setErrorGlobal("")} />
      )}
    </div>
  );
}

export default FormularioInicio;
