import {Row, Col, Button, Card, FormControl, FormSelect, Form} from "react-bootstrap";
import React, {useState} from "react";
import AgregarVisita from "./agregar-visita";

export default function Visitas() {
    const Options = {
        Listado: "Listado",
        Agregar: "Agregar"
    }
    const [option, setOption] = useState(Options.Listado);
    return (
        <>
            <div className="d-flex fw-bolder fs-4 mb-5">
                <div role="button"
                     onClick={() => setOption(Options.Listado)}
                     className={`me-4 ${option === Options.Listado ? "text-primary text-decoration-underline" : ""}`}>Listado
                </div>
                <div role="button"
                     onClick={() => setOption(Options.Agregar)}
                     className={`me-4 ${option === Options.Agregar ? "text-primary text-decoration-underline" : ""}`}>Agregar
                    nueva Visita
                </div>
            </div>
            {option === Options.Listado && (
                <Card className="shadow">
                    <Card.Header>
                        <Card.Title className="fw-bolder text-center">Listado de visitas</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col><FormControl type="date" className="border-2"></FormControl></Col>
                            <Col><FormSelect>
                                <option>Iniciada</option>
                                <option>En proceso</option>
                                <option>Finalizada</option>
                            </FormSelect></Col>
                            <Col>
                                <FormSelect>
                                    <option>Juan</option>
                                    <option>Pedro</option>
                                    <option>Martin</option>
                                </FormSelect>
                            </Col>
                            <Col><Button variant="secondary">Buscar</Button></Col>
                        </Row>
                        <table className="table">
                            <thead>
                            <tr className="fw-bolder">
                                <td>Fecha de registro</td>
                                <td>Fecha iniciada</td>
                                <td>Estado</td>
                                <td>Fecha finalizacion</td>
                                <td>Tecnico</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>3 de Septiembre</td>
                                <td>4 de Septiembre</td>
                                <td>En proceso</td>
                                <td>N/A</td>
                                <td>Juan Perez</td>
                            </tr>
                            </tbody>
                        </table>
                    </Card.Body>
                </Card>
            )}
            {option === Options.Agregar && (
                <AgregarVisita></AgregarVisita>
            )}
        </>
    )
}