import Modal from "../components/ui/modal";
import { useModalContext } from "../contexts/ModalContext";

function RegisterModal() {
    const {modal, handleModal} = useModalContext();
    return (  
        <Modal
            title={"Register"}
            open={modal?.register?.open}
            onClose={() => handleModal('register')}
        >
            <button onClick={() => handleModal('profile', true)}>Profile</button>
        </Modal>
    );
}

export default RegisterModal;