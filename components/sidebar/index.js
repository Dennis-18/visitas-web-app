
export default function Sidebar({setOption}) {
    return (
        <div className="border-end h-100">

            <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <svg className="bi" width="40" height="32"></svg>
                <div className="fs-4">Opciones</div>
            </div>
            <>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li>
                        <a href="#" className="nav-link link-dark">
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Empleados
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link link-dark">
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Visitas
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link link-dark">
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Reportes
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link link-dark">
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Clientes
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link link-dark">
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Configuraciones
                        </a>
                    </li>
                </ul>
            </>
        </div>
    );
}