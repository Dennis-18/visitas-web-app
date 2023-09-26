import {Row, Col, Card, FormControl, Button} from "react-bootstrap";

export default function Configuraciones() {
    return (
        <>
            <Row className="border border-2 p-3 rounded">
                <span className="text-center fw-bolder fs-4">Estados de visitas</span>
                <Col className="col-3">
                    <Card className="shadow">
                        <Card.Body>
                            <div className="mb-5">
                                <span>Descripcion</span>
                                <FormControl className="border-2" placeholder="Estado"/>
                            </div>
                            <div className="mt-5 d-flex flex-column">
                                <Button variant="secondary" className="mb-2">Descartar</Button>
                                <Button>Guardar</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="">
                    <Card className="p-3 shadow">
                        <div className="d-flex">
                            <Card className="shadow w-50 p-2 m-2">
                                <div className="d-flex justify-content-between">
                                    <span className="fw-bolder w-100">Creada</span>
                                    <Button className="">Editar</Button>
                                </div>
                                <span className="fw-bolder">Visitas con este estado: 20</span>
                            </Card>
                            <Card className="shadow w-50 p-2 m-2">
                                <div className="d-flex justify-content-between">
                                    <span className="fw-bolder w-100">Iniciada</span>
                                    <Button className="">Editar</Button>
                                </div>
                                <span className="fw-bolder">Visitas con este estado: 20</span>
                            </Card>
                        </div>
                        <div className="d-flex">
                            <Card className="shadow w-50 p-2 m-2">
                                <div className="d-flex justify-content-between">
                                    <span className="fw-bolder w-100">Proceso</span>
                                    <Button className="">Editar</Button>
                                </div>
                                <span className="fw-bolder">Visitas con este estado: 20</span>
                            </Card>
                            <Card className="shadow w-50 p-2 m-2">
                                <div className="d-flex justify-content-between">
                                    <span className="fw-bolder w-100">Finalizada</span>
                                    <Button className="">Editar</Button>
                                </div>
                                <span className="fw-bolder">Visitas con este estado: 20</span>
                            </Card>
                        </div>

                    </Card>
                </Col>
            </Row>
            <Row className="border border-2 rounded mt-5 p-3">
                <Col className="col-3">
                    <Card className="shadow">
                        <Card.Body>
                            <div className="mb-5">
                                <span>Descripcion</span>
                                <FormControl className="border-2" placeholder="Rol de usuario"/>
                            </div>
                            <div className="mt-5 d-flex flex-column">
                                <Button variant="secondary" className="mb-2">Descartar</Button>
                                <Button>Guardar</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="">
                    <Card className="p-3 shadow">
                        <div className="d-flex">
                            <Card className="shadow w-50 p-2 m-2">
                                <div className="d-flex justify-content-between">
                                    <span className="fw-bolder w-100">Administrador</span>
                                    <Button className="">Editar</Button>
                                </div>
                                <span className="fw-bolder">Usuarios con este rol: 20</span>
                            </Card>
                            <Card className="shadow w-50 p-2 m-2">
                                <div className="d-flex justify-content-between">
                                    <span className="fw-bolder w-100">Supervisor</span>
                                    <Button className="">Editar</Button>
                                </div>
                                <span className="fw-bolder">Usuarios con este rol: 20</span>
                            </Card>
                        </div>
                        <div className="d-flex">
                            <Card className="shadow w-50 p-2 m-2">
                                <div className="d-flex justify-content-between">
                                    <span className="fw-bolder w-100">Tecnico</span>
                                    <Button className="">Editar</Button>
                                </div>
                                <span className="fw-bolder">Usuarios con este rol: 20</span>
                            </Card>
                        </div>

                    </Card>
                </Col>
            </Row>
        </>
    )
}