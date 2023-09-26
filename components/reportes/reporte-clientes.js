import {Card, FormControl, FormSelect, Button} from "react-bootstrap";
import React from "react";

export default function ReporteClientes() {
    return (
      <>
          <Card className="mt-4 shadow">
              <Card.Header className="d-flex justify-content-between align-items-center">
                  <span>Desde</span>
                  <FormControl type="date"></FormControl>
                  <span>Hasta</span>
                  <FormControl type="date"></FormControl>

                  <FormSelect className="">
                      <option>PDF</option>
                      <option>EXCEL</option>
                  </FormSelect>
                  <Button>Guardar</Button>
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
                      </tr>
                      </tbody>
                  </table>
              </Card.Body>
          </Card>
      </>
    );
}