import { useState } from 'react';
import FormHeader from './form_header/FormHeader';
import FormBody from './form_body/FormBody';
import FormFooter from './form_footer/FormFooter';

export default function Form({
    headerProps,
    bodyProps,
    footerProps,
    onSubmit,
}) {
    const [values, setValues] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(values);
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <FormHeader {...headerProps} />
            <FormBody 
                {...bodyProps} 
                values={values}
                onChange={handleChange}
                />
            <FormFooter {...footerProps} />
        </form>
    )   
}