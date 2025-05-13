import styles from "./OpcionesSesion.module.css";

function EnlaceSesion({ url, texto }) {
    return <a href={url} className={styles.enlaceSesion}>{texto}</a>;
}

function OpcionesSesion() {
    const enlaces = [
        { url: "/recuperar-contraseña", texto: "¿Olvidaste tu contraseña?" },
        { url: "/registrarse", texto: "Regístrate aquí" }
    ];

    return (
        <div className={styles.opcionesSesion}>
            {enlaces.map((enlace) => (
                <EnlaceSesion key={enlace.url} url={enlace.url} texto={enlace.texto} />
            ))}
        </div>
    );
}

export default OpcionesSesion;
