import {Button} from "react-bootstrap";
import {BoxArrowRight} from "react-bootstrap-icons";
import {useRouter} from "next/router";

export default function Nav() {
    const router = useRouter();
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary mx-2">
                <div className="w-100">
                    <div className="d-flex align-items-center justify-content-end">
                        <span>Usuario logeado</span>
                        <Button variant={"secondary"} className="mx-2" onClick={() => router.push("/")}>Cerrar sesion <BoxArrowRight className="ms-1"/></Button>
                    </div>
                </div>

            </nav>
        </>
    )
}