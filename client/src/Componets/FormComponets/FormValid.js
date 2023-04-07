import React from 'react'
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Country, State } from 'countries-state-list';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import User from "./User"
import { AddData } from '../../State/Action';
import { useDispatch } from 'react-redux';

// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import Input  from '@mui/material/Input';


const nameCheck = /^[a-zA-Z]{2,30}$/;
const emailCheck =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passCheck =/^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,15}$/;

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

  mobileNumber: yup
    .string('Enter your mobile number')
    .min(10, 'Mobile Number should be of minimum 10 characters length')
    .max(15, 'Mobile Number should be of Max 15 characters length')
    // .matches(ageCheck ,"only Digit")
    .required('Mobile Number is required'),

  countryName: yup
    .string('Select  your country')
    .required('Country is required'),
  stateName: yup
    .string('Select  your state')
    .required('Country Number is required'),

});

const FormValid = () => {

  const dispatch = useDispatch()

  const obj = Country.getAllCountries()
  const obj2 = State.getAllStates()
  const [clitylist, setClitylist] = useState([])

  let nulla = ''
  const selectData = (evet) => {
    return (
      obj.map((item) => {
        if (evet.target.value === item.name) {
          objeselet(item.isoCode);
        }
      })
    );
  }

  const objeselet = (isoCode) => {
    setClitylist([])
    obj2.map((item) => {
      if (item.countryCode === isoCode) {
        setClitylist((oldData) => {
          return [
            ...oldData,
            item
          ]
        })
      }
    })
  }
  const formik = useFormik({
    initialValues: {
      firstName: nulla,
      lastName: nulla,
      email: nulla,
      mobileNumber: nulla,
      countryName: nulla,
      stateName: nulla,
    },

    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(AddData(values.firstName,values.lastName,values.email,values.mobileNumber,values.countryName,values.stateName)); 
      // values.firstName= nulla,
      // values.lastName= nulla,
      // values.email= nulla,
      // values.mobileNumber= nulla,
      // values.countryName= nulla,
      // values.stateName= nulla;
    },
  });

  return (
    <>
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
                id="mobileNumber"
                name="mobileNumber"
                label="Mobile Number"
                type="number"
                value={formik.values.mobileNumber}
                onChange={formik.handleChange}
                error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
                helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
              />
            </div>
          </div>

          <div className="row my-3">
            <div className='col-6'>

              <FormControl fullWidth>
                <InputLabel id="countryNametable">Country</InputLabel>
                <Select
                  labelId="countryNametable"
                  label="countryName"
                  id="countryName"
                  name="countryName"
                  fullWidth
                  value={formik.values.countryName}
                  onChange={(e) => { formik.handleChange(e); selectData(e) }}
                  error={formik.touched.countryName && Boolean(formik.errors.countryName)}
                // helperText={formik.touched.countryName && formik.errors.countryName}
                >
                  {obj.map((option, i) => (
                    <MenuItem key={i} value={option.name}>
                      {i + 1} - {option.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className='col-6'>
              <FormControl fullWidth>
                <InputLabel id="stateNamelabel">State</InputLabel>
                <Select
                  labelId="stateNamelabel"
                  label="State"
                  id="stateName"
                  name="stateName"
                  fullWidth
                  value={formik.values.stateName}
                  onChange={(e) => { formik.handleChange(e) }}
                  error={formik.touched.stateName && Boolean(formik.errors.stateName)}
                // helperText={formik.touched.stateName && formik.errors.stateName}
                >
                  {clitylist.map((option, i) => (
                    <MenuItem key={i} value={option.name}>
                      {i + 1} - {option.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

          </div>
          <Button color="primary" variant="contained" className='my-3' fullWidth type="submit">submit</Button>
      </form>
      <User />
    </div>
    </>
  )
}
export default FormValid;