import {Card, Row, Col, FormSelect, FormControl, Button} from "react-bootstrap";
import React from "react";

export default function ReporteEmpleados() {
    return (
        <>
            <Card className="mt-4 shadow">
                <Card.Header className="d-flex justify-content-between">
                    <FormSelect className="w-25">
                        <option>Administrador</option>
                        <option>Supervisor</option>
                        <option>Tecnico</option>
                    </FormSelect>
                    <FormSelect className="w-25">
                        <option>PDF</option>
                        <option>EXCEL</option>
                    </FormSelect>
                </Card.Header>
                <Card.Body>
                    <table className="table">
                        <thead>
                        <tr className="fw-bolder">
                            <td>Nombre</td>
                            <td>Apellido</td>
                            <td>Direccion</td>
                            <td>Telefono</td>
                            <td>DPI</td>
                            <td>Correo Electronico</td>
                            <td>Nombre de usuario</td>
                            <td>Rol</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Juan</td>
                            <td>Perez</td>
                            <td>zona 11 de Guatemala</td>
                            <td>98745623</td>
                            <td>3246546521365465</td>
                            <td>juan@gmail.com</td>
                            <td>juanp</td>
                            <td>Administrador</td>
                        </tr>
                        </tbody>
                    </table>
                </Card.Body>
            </Card>
        </>
    )
}