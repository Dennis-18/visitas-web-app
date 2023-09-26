export default function Sidebar({setOption, options}) {
    return (
        <div className="border-end h-100">

            <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <svg className="bi" width="40" height="32"></svg>
                <div className="fs-4" role="button" tabIndex={0}
                     onClick={() => setOption(options.Dashboard)}>Dashboard</div>
            </div>
            <>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li>
                        <div className="nav-link link-dark" role="button" tabIndex={0}
                             onClick={() => setOption(options.Empleados)}>
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Empleados
                        </div>
                    </li>
                    <li>
                        <div className="nav-link link-dark" role="button" tabIndex={0}
                             onClick={() => setOption(options.Visitas)}>
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Visitas
                        </div>
                    </li>
                    <li>
                        <div className="nav-link link-dark" role="button" tabIndex={0}
                             onClick={() => setOption(options.Reportes)}>
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Reportes
                        </div>
                    </li>
                    <li>
                        <div className="nav-link link-dark" role="button" tabIndex={0}
                             onClick={() => setOption(options.Clientes)}>
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Clientes
                        </div>
                    </li>
                    <li>
                        <div className="nav-link link-dark" role="button" tabIndex={0}
                             onClick={() => setOption(options.Configuraciones)}>
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Configuraciones
                        </div>
                    </li>
                </ul>
            </>
        </div>
    );
}