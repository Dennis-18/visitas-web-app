import {Card} from "react-bootstrap";
import {
    PeopleFill,
    PersonCheck,
    PersonFillExclamation,
    PersonGear,
    PersonRolodex,
    PersonVcard
} from "react-bootstrap-icons";
import React from "react";

export default function DasbhoardCards() {
    return (
        <>
            <div className="d-flex justify-content-between my-5 w-100">
                <Card className="w-25 h-100 mt-4 shadow">
                    <Card.Body className="d-flex flex-column justify-content-cener align-items-center">
                        <PersonGear className="display-1 text-secondary"></PersonGear>
                        <span className="mt-4">Tecnicos: </span>
                    </Card.Body>
                </Card>
                <Card className="w-25 h-100 mt-4 shadow">
                    <Card.Body className="d-flex flex-column justify-content-cener align-items-center">
                        <PersonRolodex className="display-1 text-secondary"></PersonRolodex>
                        <span className="mt-4">Administradores: </span>
                    </Card.Body>
                </Card>
                <Card className="w-25 h-100 mt-4 shadow">
                    <Card.Body className="d-flex flex-column justify-content-cener align-items-center">
                        <PersonCheck className="display-1 text-secondary"></PersonCheck>
                        <span className="mt-4">Supervisores: </span>
                    </Card.Body>
                </Card>
            </div>
            <div className="d-flex justify-content-between mt-7 w-100">
                <Card className="w-25 h-100 mt-4 shadow">
                    <Card.Body className="d-flex flex-column justify-content-cener align-items-center">
                        <PersonVcard className="display-1 text-secondary"></PersonVcard>
                        <span className="mt-4">Total de Visitas: </span>
                    </Card.Body>
                </Card>
                <Card className="w-25 h-100 mt-4 shadow">
                    <Card.Body className="d-flex flex-column justify-content-cener align-items-center">
                        <PeopleFill className="display-1 text-secondary"></PeopleFill>
                        <span className="mt-4">Visitas terminadas: </span>
                    </Card.Body>
                </Card>
                <Card className="w-25 h-100 mt-4 shadow">
                    <Card.Body className="d-flex flex-column justify-content-cener align-items-center">
                        <PersonFillExclamation className="display-1 text-secondary"></PersonFillExclamation>
                        <span className="mt-4">Visitas pendientes de Asignar: </span>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}