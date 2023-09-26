import {Row, Col, FormControl, Card} from "react-bootstrap";

export default function DatosCliente() {
    return (
        <>
            <Card className="mt-4 shadow">
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
                </Card.Body>
            </Card>
        </>
    )
}