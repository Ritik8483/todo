import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as yup from 'yup';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate=useNavigate();
    const formikInitialValues={
        name:'',
        email:'',
        password:'',
        confirmPassword:''
      }
      const submitForm=(values)=>{
        navigate('/pagetitle')
      }
      const validateSchema=yup.object().shape({
        name: yup.string().min(5,'Too short! Please enter atleast 5 characters').required('Name is required'),
        email: yup.string().email().required('Email is required'),
        password: yup.string()
        .required('No password provided.') 
        .min(8, 'Password is too short - should be 8 chars minimum.'),
        confirmPassword:yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password')
      })
  return (
    <div>
        <div className='container'>
          <div className='card'>
            <div className="image">
              <span><img src="https://imgur.com/81X12mR.png" /></span>
              <h3>Signup</h3>
              <p>Welome user!Enter your credentials below to signup.</p>
            </div>
            <Formik initialValues={formikInitialValues} onSubmit={submitForm} validationSchema={validateSchema}>
              <Form>
                <div className='outer_div'>
                  <Field className='input_text' type='text' name='name' placeholder='Enter your name'></Field>
                  <p className='error_msg'><ErrorMessage name='name'/></p>
                </div>
                <div className='outer_div'>
                  <Field className='input_text' type='text' name='email' placeholder='Enter your email'></Field>
                  <p className='error_msg'><ErrorMessage name='email'/></p>
                </div>
                <div className='outer_div'>
                  <Field className='input_text password_field' type='password' name='password' placeholder='Enter your password'></Field>
                  <p className='error_msg'><ErrorMessage name='password'/></p>
                </div>
                <div className='outer_div'>
                  <Field className='input_text password_field' type='password' name='confirmPassword' placeholder='Confirm password'></Field>
                  <p className='error_msg'><ErrorMessage name='confirmPassword'/></p>
                </div>
                <button type='submit' className='btns'>Signup</button>
              </Form>
            </Formik>
            <div className="social">
              <span><img src="https://imgur.com/Sg4tiGj.png" /></span>
              <span><img src="https://imgur.com/0xwv5pD.png" /></span>
              <span><img src="https://imgur.com/DGBR03u.png" /></span>
              <span><img src="https://imgur.com/O9V5ups.png" /></span>
            </div>
            <p className='account'>Already have an account?<Link className='link_tag' to='/login'>Login</Link></p>
          </div>
        </div>
    </div>
  )
}

export default Signup;