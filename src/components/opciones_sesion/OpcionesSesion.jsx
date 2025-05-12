import "./OpcionesSesion.css"

function EnlaceSesion({ url, texto }) {
    return <a href={url} className="enlace-sesion">{texto}</a>;
}

function OpcionesSesion() {
    const enlaces = [
        { url: "/recuperar-contraseña", texto: "¿Olvidaste tu contraseña?" },
        { url: "/registrarse", texto: "Regístrate aquí" }
    ];

    return (
        <div className="opciones-sesion">
            {enlaces.map((enlace) => (
                <EnlaceSesion key={enlace.url} url={enlace.url} texto={enlace.texto} />
            ))}
        </div>
    );
}

export default OpcionesSesion;
