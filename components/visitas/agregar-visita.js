import {Button, FormSelect} from "react-bootstrap";
import React, {useState} from "react";
import InfoCliente from "./info-cliente";
import DatosVisita from "./datos-visita";
import DatosCliente from "./datos-cliente";
export default function AgregarVisita() {
    const Options = {
        Buscar: "Buscar",
        Agregar: "Agregar",
    };

    const [option, setOption] = useState();
    return (
        <>
            <div className="d-flex">
                <FormSelect className="w-75">
                    <option>Juan</option>
                    <option>Pedro</option>
                    <option>Martin</option>
                </FormSelect>
                <Button className="mx-2" variant="secondary" onClick={() => setOption(Options.Buscar)}>Buscar</Button>
                <Button variant="secondary" onClick={() => setOption(Options.Agregar)}>Agregar Nuevo</Button>
            </div>
            {option === Options.Buscar && (
                <>
                    <InfoCliente cancelCallback={() => setOption("")}></InfoCliente>
                    <DatosVisita />
                    <div className="mt-4 d-flex justify-content-center">
                        <Button variant="secondary" className="me-4">Cancelar</Button>
                        <Button>Guardar</Button>
                    </div>
                </>


            )}
            {option === Options.Agregar && (
                <>
                    <DatosCliente />
                    <DatosVisita />
                    <div className="mt-4 d-flex justify-content-center">
                        <Button variant="secondary" className="me-4">Cancelar</Button>
                        <Button>Guardar</Button>
                    </div>
                </>
            )}

        </>
    )
}