import React from 'react'
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import { apiEdit } from '../../State/Action/Apiaction';

import { useDispatch } from 'react-redux';


const nameCheck = /^[a-zA-Z]{2,30}$/;
const emailCheck =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const validationSchema = yup.object({
    firstName: yup
        .string('Enter your first name')
        .min(2, 'Enter a valid First Name')
        .matches(nameCheck, " only alphabets")
        .required('First Name is required'),
    lastName: yup
        .string('Enter your last name')
        .min(2, 'Enter a valid Last Name')
        .matches(nameCheck, " only alphabets")
        .required('Last Name is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .matches(emailCheck, " Demo@gmail.com")
        .required('Email is required'),
    webSite: yup
        .string('Enter your Web site')
        // .matches(nameRegExp, " only alphabets")
        .required('Web Site is required'),
});

function ApiModalForm(props) {

    const dispatch = useDispatch()


    // let nulla = ''

    const formik = useFormik({
        initialValues: {
            firstName: props.pass.firstName,
            lastName: props.pass.lastName,
            email: props.pass.email,
            webSite: props.pass.website,
        },

        validationSchema: validationSchema,
        onSubmit: (values) => {
            let name = `${values.firstName} ${values.lastName}`
            console.log(name);
            // dispatch(AddData(name, values.lastName, values.email, values.webSite));
            dispatch(apiEdit(props.pass.id, values.firstName, values.lastName, values.email, values.webSite));
            props.handleClose()
        },
    });

    return (
        <div className='container'>
            <form onSubmit={formik.handleSubmit}>
                <div className="row my-3">
                    <div className="col-6">

                        <TextField
                            fullWidth
                            id="firstName"
                            name="firstName"
                            placeholder='name'
                            label="firstName"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName} />


                    </div>
                    <div className="col-6">
                        <TextField
                            fullWidth
                            id="lastName"
                            name="lastName"
                            label="lastName"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <TextField
                            fullWidth
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />


                    </div>
                    <div className="col-6">
                        <TextField
                            fullWidth
                            id="webSite"
                            name="webSite"
                            label="Web site"

                            value={formik.values.webSite}
                            onChange={formik.handleChange}
                            error={formik.touched.webSite && Boolean(formik.errors.webSite)}
                            helperText={formik.touched.webSite && formik.errors.webSite}
                        />
                    </div>
                </div>
                <div className=' row'>
                    <div className='col-6'>
                        <Button color="primary" variant="contained" className='my-3' fullWidth type="submit" >Edit</Button>
                    </div>
                    <div className='col-6'>
                        <Button variant="contained" className='bg-dark my-3' fullWidth onClick={() => { props.handleClose() }} >Cancel</Button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default ApiModalForm
