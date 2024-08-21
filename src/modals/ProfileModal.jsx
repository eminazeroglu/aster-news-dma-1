import Modal from "../components/ui/modal";
import { useModalContext } from "../contexts/ModalContext";

function ProfileModal() {
    const {modal, handleModal} = useModalContext();
    return (
        <Modal
            title={"Profile Modal"}
            open={modal?.profile?.open}
            onClose={() => handleModal('profile')}
        >
            Profile
        </Modal>
    );
}

export default ProfileModal;