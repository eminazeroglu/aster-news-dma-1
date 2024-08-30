import Card from "components/ui/card/index.jsx";
import FormGroup from "components/ui/form/FormGroup.jsx";
import FormInput from "components/ui/form/FormInput.jsx";
import FormTextarea from "components/ui/form/FormTextarea.jsx";
import Button from "components/ui/button/index.jsx";
import {useFormik} from "formik";
import ContactValidation from "src/validations/contact.validation.js.jsx";
import emailjs from '@emailjs/browser';
import Page from "components/ui/page/index.jsx";

function Contact() {

    const {
        values,
        handleBlur,
        errors,
        touched,
        setFieldValue,
        handleSubmit,
        isValid,
        isSubmitting
    } = useFormik({
        initialValues: {
            name: '',
            surname: '',
            email: '',
            phone: '',
            message: '',
        },
        validationSchema: ContactValidation,
        onSubmit: async (values) => {
            try {
                const res = await emailjs
                    .send(
                        import.meta.env.VITE_APP_YOUR_SERVICE_ID,
                        import.meta.env.VITE_APP_YOUR_TEMPLATE_ID,
                        values,
                        {
                            publicKey: import.meta.env.VITE_APP_YOUR_PUBLIC_KEY,
                        }
                    );
                console.log(res);
            } catch (error) {
                console.log('FAILED...', error);
            }
        },
    });

    return (
        <Page>
            <Card>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-5">
                        <div className="grid lg:grid-cols-2 gap-5">
                            <FormGroup
                                label="Adınız"
                                errorMessage={errors.name && touched.name ? errors.name : false}
                            >
                                <FormInput
                                    name="name"
                                    value={values.name}
                                    onChange={e => setFieldValue('name', e, false)}
                                    onBlur={handleBlur}
                                />
                            </FormGroup>

                            <FormGroup
                                label="Soyadınız"
                                errorMessage={errors.surname && touched.surname ? errors.surname : false}
                            >
                                <FormInput
                                    name="surname"
                                    value={values.surname}
                                    onChange={e => setFieldValue('surname', e, false)}
                                    onBlur={handleBlur}
                                />
                            </FormGroup>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-5">
                            <FormGroup
                                label="Email"
                                errorMessage={errors.email && touched.email ? errors.email : false}
                            >
                                <FormInput
                                    name="email"
                                    value={values.email}
                                    onChange={e => setFieldValue('email', e, false)}
                                    onBlur={handleBlur}
                                />
                            </FormGroup>

                            <FormGroup
                                label="Telefon"
                                errorMessage={errors.phone && touched.phone ? errors.phone : false}
                            >
                                <FormInput
                                    name="phone"
                                    value={values.phone}
                                    onChange={e => setFieldValue('phone', e, false)}
                                    onBlur={handleBlur}
                                />
                            </FormGroup>
                        </div>

                        <div className="grid grid-cols-1 gap-5">
                            <FormGroup
                                label="Mesaj"
                                errorMessage={errors.message && touched.message ? errors.message : false}
                            >
                                <FormTextarea
                                    name="message"
                                    value={values.message}
                                    onChange={e => setFieldValue('message', e, false)}
                                    onBlur={handleBlur}
                                />
                            </FormGroup>
                        </div>

                        <div className="flex justify-end">
                            <Button loading={isSubmitting} disabled={!isValid} type="submit" rounded={true}>
                                Göndər
                            </Button>
                        </div>
                    </div>
                </form>
            </Card>
        </Page>
    );
}

export default Contact;