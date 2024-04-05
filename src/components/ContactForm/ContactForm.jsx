import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').required('Required field'),
        number: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!').
            matches(/^[0-9]{3}-[0-9]{2}-[0-9]{2}$/, {
                message: "Invalid phone number",
                excludeEmptyString: true,
            })
            .required('Required field'),
});
export default function ContactForm () {
    
        const nameFieldId = useId();
        const numberFieldId = useId();
        const dispatch = useDispatch();
    
        return (
            <Formik 
                initialValues={{
                    name: "",
                    number: "",
                    id: "",
                }}
                onSubmit={(values, actions) => {
                    const newContact = {
                        id: "id",
                        name: values.name,
                        number: values.number,
                    };
                    dispatch(addContact(newContact));
                    actions.resetForm();
                }}
                validationSchema={contactSchema}>
                <Form className={css.form}>
                <div>
                    <label className={css.text} htmlFor={nameFieldId}>Name</label>
                    <Field className={css.input} type="text" name="name" id={nameFieldId} />
                    <ErrorMessage className={css.error} name="name" component="span" style={{ color: "red" }} />
                </div>
                <div>
                    <label className={css.text} htmlFor={numberFieldId}>Number</label>
                    <Field className={css.input} type="text" name="number" id={numberFieldId}
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
                    placeholder="XXX-XX-XX"/>
                    <ErrorMessage className={css.error} name="name" component="span" style={{ color: "red" }} />
                </div>
                <button className={css.button} type="submit">
                    Add contact
                </button>
                </Form>
                </Formik>
        );

} 