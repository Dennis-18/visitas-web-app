import {Row, Col, Card, FormControl, Button} from "react-bootstrap";
import React, {useState} from "react";
import BorrarEmpleadoModal from "./borrar-empleado-modal";
export default function Empleados() {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [nombreEmpleado, setNombreEmpleado] = useState();
    const [idEmpleado, setIdEmpleado] = useState();
    return (
        <div className="vh-100 p-4">
            <Card className="mb-5 shadow">
                <Card.Header>
                    <Card.Title className="text-center fw-bolder">Agregar empleado</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Row className="my-3">
                        <Col><FormControl type="text" placeholder="Nombre" className="border border-secondary"></FormControl></Col>
                        <Col><FormControl type="text" placeholder="Apellido" className="border border-secondary"></FormControl></Col>
                        <Col><FormControl type="text" placeholder="Direccion" className="border border-secondary"></FormControl></Col>
                    </Row>
                    <Row className="my-3">
                        <Col><FormControl type="text" placeholder="Telefono" className="border border-secondary"></FormControl></Col>
                        <Col><FormControl type="text" placeholder="DPI" className="border border-secondary"></FormControl></Col>
                        <Col><FormControl type="text" placeholder="Correo Electronico" className="border border-secondary"></FormControl></Col>
                    </Row>
                    <Row className="my-3">
                        <Col><FormControl type="text" placeholder="Nombre de usuario" className="border border-secondary"></FormControl></Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <Button variant="secondary" className="mx-4" size="lg">Descartar</Button>
                            <Button size="lg">Guardar</Button>
                        </Col>
                    </Row>

                </Card.Body>
            </Card>
            <Card className="mt-5 shadow">
                <Card.Header>
                    <Card.Title className="fw-bolder text-center">Lista de Empleados</Card.Title>
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
                            <td>Acciones</td>
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
                                <td><Button variant="danger" onClick={() => {
                                    setShowDeleteModal(true);
                                    setNombreEmpleado("Juan");
                                    setIdEmpleado("1")
                                }}>Eliminar</Button></td>
                            </tr>
                        </tbody>
                    </table>
                </Card.Body>
            </Card>
            <BorrarEmpleadoModal showModal={showDeleteModal} setShowModal={setShowDeleteModal} nombreEmpleado={nombreEmpleado} idEmpleado={idEmpleado}></BorrarEmpleadoModal>
        </div>
    )
}