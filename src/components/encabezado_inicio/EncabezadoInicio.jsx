import "./EncabezadoInicio.css";

function EncabezadoInicio() {
    return (
        <header className="encabezado">
            <div className="franja"></div>
            <nav className="nav">
                <div className="nav-contenedor">
                    <figure className="nav-figura">
                        <img src="../../assets/logo-no-background.png" alt="Logo Universitario" className="nav-logo" />
                    </figure>
                    <div className="datos">
                        <h2>Acceso a la Banca en Línea</h2>
                        <p>
                            <a href="sitio_web_institucional.html" className="regresar">
                                Volver a la página principal
                            </a>
                        </p>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default EncabezadoInicio;
