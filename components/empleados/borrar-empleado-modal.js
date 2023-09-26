import {Modal, Button} from "react-bootstrap";

export default function BorrarEmpleadoModal({showModal, setShowModal, nombreEmpleado, idEmpleado}) {
    return (
        <Modal show={showModal}>
            <Modal.Header>
                <Modal.Title>Eliminar empleado</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3">
                    <span>{`Estas seguro de eliminar al empleado: ${nombreEmpleado}`}</span>
                </div>
                <div className="d-flex justify-content-center">
                    <Button variant="secondary" className="me-3" onClick={() => setShowModal(false)}>Cancelar</Button>
                    <Button variant="danger" onClick={() => setShowModal(false)}>Eliminar</Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}