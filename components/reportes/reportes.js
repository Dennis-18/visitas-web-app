import React, {useState} from "react";
import ReporteEmpleados from "./reporte-empleados";
import ReporteVisitas from "./reporte-visitas";
import ReporteClientes from "./reporte-clientes";
export default function Reportes() {
    const Options = {
        Empleados: "Empleados",
        Visitas: "Visitas",
        Clientes: "Clientes"
    };
    const [option, setOption] = useState(Options.Empleados);
    return (
        <>
            <div className="d-flex fw-bolder fs-4 mb-5">
                <div role="button"
                     onClick={() => setOption(Options.Empleados)}
                     className={`me-4 ${option === Options.Empleados ? "text-primary text-decoration-underline" : ""}`}>Empleados
                </div>
                <div role="button"
                     onClick={() => setOption(Options.Visitas)}
                     className={`me-4 ${option === Options.Visitas ? "text-primary text-decoration-underline" : ""}`}>Visitas
                </div>
                <div role="button"
                     onClick={() => setOption(Options.Clientes)}
                     className={`me-4 ${option === Options.Clientes ? "text-primary text-decoration-underline" : ""}`}>Clientes
                </div>
            </div>

            {option === Options.Empleados && (
                <ReporteEmpleados />
            )}
            {option === Options.Visitas && (
                <ReporteVisitas />
            )}
            {option === Options.Clientes && (
                <ReporteClientes />
            )}
        </>
    )
}