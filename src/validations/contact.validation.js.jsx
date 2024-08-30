import * as Yup from "yup";

const ContactValidation = Yup.object().shape({
    name: Yup.string()
        .required('Zəhmət olmasa boş buraxmayın'),
    surname: Yup.string()
        .required('Zəhmət olmasa boş buraxmayın'),
    email: Yup.string()
        .required('Zəhmət olmasa boş buraxmayın')
        .email('Zəhmət olmasa düzgün email yazın'),
    phone: Yup.string()
        .required('Zəhmət olmasa boş buraxmayın'),
    message: Yup.string()
        .required('Zəhmət olmasa boş buraxmayın')
})

export default ContactValidation