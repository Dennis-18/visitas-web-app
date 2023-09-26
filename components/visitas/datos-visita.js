import {Row, Col, Card, FormControl} from "react-bootstrap";

export default function DatosVisita() {
    return (
        <>
            <Card className="mt-4 shadow">
                <Card.Header>
                    <Card.Title className="fw-bolder text-center">
                        Datos de la Visita
                    </Card.Title>
                    <Card.Body>
                        <Row className="my-3">
                            <Col><FormControl className="border-2" type="date"/></Col>
                            <Col><FormControl className="border-2" placeholder="Direccion de la empresa"/></Col>
                            <Col><FormControl className="border-2" placeholder="Antiguedad del problema"/></Col>
                        </Row>
                        <Row className="my-3">
                            <Col><FormControl className="border-2" placeholder="Direccion"/></Col>
                        </Row>
                        <Row className="my-3">
                            <Col><FormControl className="border-2" placeholder="Indicaciones especiales"/></Col>
                        </Row>
                        <Row className="my-3">
                            <Col><FormControl className="border-2" placeholder="Descripcion del problema"/></Col></Row>
                    </Card.Body>
                </Card.Header>
            </Card>
        </>
    )
}