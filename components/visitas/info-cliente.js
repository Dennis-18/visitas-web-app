import {Button} from "react-bootstrap";

export default function InfoCliente({cancelCallback}) {
    return (
        <>
            <div className="w-100 bg bg-light mt-4 p-3 rounded d-flex flex-column">
                <span className="fw-bolder">Nombre: Alberto</span>
                <span className="fw-bolder">Apellido: Moran</span>
                <span className="fw-bolder">Empresa: Grupo seguridad informatica S.A</span>
                <span className="fw-bolder">Direccion de la empresa: Zona 10 de Guatemala</span>
                <div className="d-flex justify-content-center">
                    <Button variant="secondary" onClick={cancelCallback}>Cancelar</Button>
                </div>
            </div>
        </>
    )
}