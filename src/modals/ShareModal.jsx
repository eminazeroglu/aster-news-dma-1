import React from 'react';
import Modal from "components/ui/modal/index.jsx";
import {useModalContext} from "contexts/ModalContext.jsx";
import {FiFacebook} from "react-icons/fi";
import {FaFacebookF, FaLinkedin, FaLinkedinIn, FaTelegram, FaWhatsapp} from "react-icons/fa";

function ShareModal() {

    const {modal, handleModal} = useModalContext();
    const share = modal?.share?.data;

    return (
        <Modal
            open={modal?.share?.open}
            title={share?.title ? `Paylaş / ${share.title}` : ''}
            onClose={() => handleModal('share', false)}
            className="lg:w-[300px]"
        >
            <div className="flex items-center gap-4 justify-center">
                <a className="size-10 bg-primary text-white rounded inline-flex items-center justify-center" target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${share?.url}`}>
                    <FaFacebookF/>
                </a>
                <a className="size-10 bg-primary text-white rounded inline-flex items-center justify-center" target="_blank" href={`https://www.linkedin.com/sharing/share-offsite/?url=${share?.url}`}>
                    <FaLinkedinIn/>
                </a>
                <a className="size-10 bg-primary text-white rounded inline-flex items-center justify-center" target="_blank" href={`https://t.me/share/url?url=${share?.url}&text=${share?.title}`}>
                    <FaTelegram/>
                </a>
                <a className="size-10 bg-primary text-white rounded inline-flex items-center justify-center" target="_blank" href={`https://api.whatsapp.com/send?text=${share?.url}`}>
                    <FaWhatsapp/>
                </a>
            </div>
        </Modal>
    );
}

export default ShareModal;