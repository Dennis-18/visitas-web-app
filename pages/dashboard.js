import Nav from "../components/nav";
import Sidebar from "../components/sidebar";
import { Row, Col, Card } from "react-bootstrap";
import {PersonGear, PersonRolodex, PersonCheck, PersonVcard, PeopleFill, PersonFillExclamation} from "react-bootstrap-icons";
import React, {useState} from "react";

export default function Dashboard() {
    const Options = {
        Dashboard: "Dashboard",
        Empleados: "Empleados",
        Visitas: "Visitas",
        Reportes: "Reportes",
        Clientes: "Clientes",
        Configuraciones: "Configuraciones"
    };

    const [option, setOption] = useState(Options.Dashboard);
    return (
        <div className="d-flex flex-column vh-100">
                <Nav ></Nav>
            <div>
                <Row className="vh-100">
                    <Col className="h-100 col-2">
                        <Sidebar ></Sidebar>
                    </Col>
                    <Col className="d-flex flex-column mt-7 h-100">
                        <div className="d-flex justify-content-between my-5 w-100">
                            <Card  className="w-25 h-100 mt-4 shadow">
                                <Card.Body className="d-flex flex-column justify-content-cener align-items-center">
                                    <PersonGear className="display-1"></PersonGear>
                                    <span className="mt-4">Tecnicos: </span>
                                </Card.Body>
                            </Card>
                            <Card  className="w-25 h-100 mt-4 shadow">
                                <Card.Body className="d-flex flex-column justify-content-cener align-items-center">
                                    <PersonRolodex className="display-1"></PersonRolodex>
                                    <span className="mt-4">Administradores: </span>
                                </Card.Body>
                            </Card>
                            <Card  className="w-25 h-100 mt-4 shadow">
                                <Card.Body className="d-flex flex-column justify-content-cener align-items-center">
                                    <PersonCheck className="display-1"></PersonCheck>
                                    <span className="mt-4">Supervisores: </span>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="d-flex justify-content-between mt-7 w-100">
                            <Card  className="w-25 h-100 mt-4 shadow">
                                <Card.Body className="d-flex flex-column justify-content-cener align-items-center">
                                    <PersonVcard className="display-1"></PersonVcard>
                                    <span className="mt-4">Total de Visitas: </span>
                                </Card.Body>
                            </Card>
                            <Card  className="w-25 h-100 mt-4 shadow">
                                <Card.Body className="d-flex flex-column justify-content-cener align-items-center">
                                    <PeopleFill className="display-1"></PeopleFill>
                                    <span className="mt-4">Visitas terminadas: </span>
                                </Card.Body>
                            </Card>
                            <Card  className="w-25 h-100 mt-4 shadow">
                                <Card.Body className="d-flex flex-column justify-content-cener align-items-center">
                                    <PersonFillExclamation className="display-1"></PersonFillExclamation>
                                    <span className="mt-4">Visitas pendientes de Asignar: </span>
                                </Card.Body>
                            </Card>
                        </div>

                    </Col>
                </Row>

            </div>
        </div>
    )
}