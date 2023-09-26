import Nav from "../components/nav";
import Sidebar from "../components/sidebar";
import {Row, Col, Card} from "react-bootstrap";
import DasbhoardCards from "../components/dashboard/dasbhoard-cards";
import React, {useState, useEffect} from "react";

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

    useEffect(() => {
        console.log(option);
    }, [option]);
    return (
        <div className="d-flex flex-column vh-100">
            <Nav></Nav>
            <div>
                <Row className="vh-100">
                    <Col className="h-100 col-2">
                        <Sidebar setOption={setOption} options={Options}></Sidebar>
                    </Col>
                    <Col className="d-flex flex-column mt-7 h-100">
                        {option === Options.Dashboard && (
                            <DasbhoardCards />
                        )}
                    </Col>
                </Row>

            </div>
        </div>
    )
}