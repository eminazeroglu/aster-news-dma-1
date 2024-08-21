import Modal from "../components/ui/modal";
import { useModalContext } from "../contexts/ModalContext";

function LoginModal() {

    const {modal, handleModal} = useModalContext();

    return (
        <Modal
            open={modal?.login?.open}
            backdrop={true}
            onClose={() => handleModal('login')}
            title="Login Modal"
        >
            <button onClick={() => handleModal('register', true)}>Register</button>
        </Modal>
    );
}

export default LoginModal;