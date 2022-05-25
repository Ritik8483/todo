import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as yup from 'yup';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './LoginSignup.css'


const Login = () => {
  const navigate=useNavigate();
  const formikInitialValues={
    email:'',
    password:'',
  }
  const submitForm=()=>{
    navigate('/pagetitle')
  }
  const validateSchema=yup.object().shape({
    email: yup.string().email().required('Email is required'),
    password: yup.string()
    .required('No password provided.') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  })
  return (
    <div>
        <div className='container'>
          <div className='card'>
            <div className="image">
              <span><img src="https://imgur.com/81X12mR.png" /></span>
              <h3>Sign in</h3>
              <p>Welome back!Enter your email and password below to sign in.</p>
            </div>
            <Formik
              initialValues={formikInitialValues}
              onSubmit={submitForm}
              validationSchema={validateSchema}>
              <Form>
                <div className='outer_div'>
                  <Field className='input_text' type='text' name='email' placeholder='Enter your email'></Field>
                  <p className='error_msg'><ErrorMessage name='email'/></p>
                </div>
                <div className='outer_div'>
                  <Field className='input_text password_field' type='password' name='password' placeholder='Enter your password'></Field>
                  <p className='error_msg'><ErrorMessage name='password'/></p>
                </div>
                <button type='submit' className='btns'>Login</button>
              </Form>
            </Formik>
            <div className="social">
              <span><img src="https://imgur.com/Sg4tiGj.png" /></span>
              <span><img src="https://imgur.com/0xwv5pD.png" /></span>
              <span><img src="https://imgur.com/DGBR03u.png" /></span>
              <span><img src="https://imgur.com/O9V5ups.png" /></span>
            </div>
            <p className='account'>Don't have an account?<Link className='link_tag' to='/signup'>Sign up</Link></p>
          </div>
        </div>
    </div>
  )
}

export default Login