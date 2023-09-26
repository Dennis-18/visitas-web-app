import {Card, FormSelect, FormControl, Button} from "react-bootstrap";
import React from "react";

export default function ReporteVisitas() {
    return (
        <>
            <div className="d-flex">
                <FormSelect className="w-25 me-2">
                    <option>PDF</option>
                    <option>EXCEL</option>
                </FormSelect>
                <Button>Exportar</Button>
            </div>
            <Card className="mt-4 shadow">
                <Card.Header className="d-flex justify-content-between align-items-center">
                    <span>Fecha creacion</span>
                    <FormControl type="date"></FormControl>
                    <span>Hasta</span>
                    <FormControl type="date"></FormControl>
                    <span>Estado</span>
                    <FormSelect className="">
                        <option>Creada</option>
                        <option>Iniciada</option>
                        <option>Finalizada</option>
                    </FormSelect>
                    <span>Encargado</span>
                    <FormSelect className="">
                        <option>Juan Perez</option>
                        <option>Alberto Morales</option>
                    </FormSelect>
                </Card.Header>
                <Card.Body>
                    <table className="table">
                        <thead>
                        <tr className="fw-bolder">
                            <td>Fecha de registro</td>
                            <td>Tecnico encargado</td>
                            <td>Fecha de finalizacion</td>
                            <td>Estado</td>
                            <td>Cliente</td>
                            <td>Empresa</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>2 de septiembre</td>
                            <td>Juan Perez</td>
                            <td>4 de Septiembre</td>
                            <td>Finalizada</td>
                            <td>Alberto Morales</td>
                            <td>Grupo de Seguridad S.A</td>
                        </tr>
                        </tbody>
                    </table>
                </Card.Body>
            </Card>
        </>
    )
}