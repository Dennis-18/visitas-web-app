import {FormControl, Button, Col, Row} from "react-bootstrap";
import {useRouter} from "next/router";

export default function Login() {
    const router = useRouter();
    return (
        <>
            <div className="vh-100 vw-100 d-flex align-items-center justify-content-center">
                <Row className="w-75 bg bg-light h-75 rounded d-flex align-items-center">
                    <Col className="">
                        <h1 className="text-center">TechAdvise Solutions</h1>
                        <div className="text-center">Servicios de consultoria tecnica</div>
                    </Col>
                    <Col className="w-50 col-12">
                        <span>Correo electronico</span>
                        <FormControl type="password" className="w-50 mb-4"/>
                        <span>Contraseña</span>
                        <FormControl type="password" className="w-50"/>
                        <Button className="mt-4 w-50"
                                onClick={async () => await router.push("dashboard")}>Ingresar</Button>
                    </Col>
                </Row>
            </div>
        </>
    )
}