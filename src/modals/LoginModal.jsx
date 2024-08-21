import { useState } from "react";
import Button from "../components/ui/button";
import FormGroup from "../components/ui/form/FormGroup";
import FormInput from "../components/ui/form/FormInput";
import Modal from "../components/ui/modal";
import { useModalContext } from "../contexts/ModalContext";
import { serviceAuthLogin } from "../services/auth.service";
import useForm from "../hooks/useForm";

function LoginModal() {

    const { values, setField, loading, handleSubmit } = useForm({
        initialState: {
            email: '',
            password: ''
        },
        onSubmit: async values => {
            await serviceAuthLogin(values)
        }
    });

    const { modal, handleModal } = useModalContext();

    return (
        <Modal
            open={modal?.login?.open}
            backdrop={true}
            onClose={() => handleModal('login')}
            title="Login Modal"
        >
            <form onSubmit={handleSubmit}>
                <div className="space-y-5">
                    <div>
                        <FormGroup
                            label="Email"
                            required={true}
                            error="email"
                        >
                            <FormInput value={values.email} onChnage={e => setField('email', e)} />
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup
                            label="Şifrə"
                            required={true}
                            error="password"
                        >
                            <FormInput password={true} value={values.password} onChnage={e => setField('password', e)} />
                        </FormGroup>
                    </div>
                    <div>
                        <Button loading={loading} block={true} type="submit">
                            Daxil ol
                        </Button>
                    </div>
                </div>
            </form>
        </Modal>
    );
}

export default LoginModal;