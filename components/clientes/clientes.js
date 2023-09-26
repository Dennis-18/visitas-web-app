import DatosCliente from "../visitas/datos-cliente";
import {Button, Card, Col, FormControl, Row} from "react-bootstrap";
import React from "react";

export default function Clientes() {
    return (
        <>
            <Card className="mt-4 mb-5 shadow">
                <Card.Header>
                    <Card.Title className="fw-bolder text-center">
                        Datos del Cliente
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <Row className="my-3">
                        <Col><FormControl className="border-2" type="text" placeholder="Nombre"/></Col>
                        <Col><FormControl className="border-2" placeholder="Apellido"/></Col>
                        <Col><FormControl className="border-2" placeholder="Telefono"/></Col>
                    </Row>
                    <Row className="my-3">
                        <Col><FormControl className="border-2" placeholder="Direccion"/></Col>
                        <Col><FormControl className="border-2" placeholder="Correo Electronico"/></Col>
                    </Row>
                    <Row className="my-3">
                        <Col><FormControl className="border-2" placeholder="Nombre de usuario"/></Col>
                    </Row>
                    <div className="d-flex justify-content-center">
                        <Button variant="secondary me-4">Descartar</Button>
                        <Button>Guardar</Button>
                    </div>
                </Card.Body>
            </Card>

            <Card className="shadow">
                <Card.Header className="d-flex align-items-center">
                    <Card.Title className="fw-bolder">Clientes</Card.Title>
                    <div className="d-flex justify-content-end w-100">
                        <FormControl placeholder="Buscar cliente" className="w-25 me-4"/>
                        <Button>Buscar</Button>
                    </div>
                </Card.Header>
                <Card.Body>
                    <table className="table">
                        <thead>
                        <tr className="fw-bolder">
                            <td>Nombre</td>
                            <td>Apellido</td>
                            <td>Direccion</td>
                            <td>Telefono</td>
                            <td>Nombre de la empresa</td>
                            <td>Fecha de registro</td>
                            <td>Acciones</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Juan</td>
                            <td>Perez</td>
                            <td>zona 11 de Guatemala</td>
                            <td>98745623</td>
                            <td>Grupo de seguridad S.A</td>
                            <td>Fecha de registro</td>
                            <td><Button>Editar</Button></td>
                        </tr>
                        </tbody>
                    </table>
                </Card.Body>
            </Card>
        </>
    )
}