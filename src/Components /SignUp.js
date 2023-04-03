import React from 'react'
import { Formik, Form } from 'formik'
import TextField from './TextField'

const SignUp = () => {
  return (
    <Formik className="flex justify-center pt-36"
      initialValues={
        {
          fullnames: "",
          username: "",
          email: "",
          password: ""
        }    }>
      {
        formik => {
          <div >
            <h1 className='text-2xl font-bold text-center'>Sign Up</h1>

            <Form>
              <TextField label="Full name" name="fullname" type="text" />
              <TextField label="Username" name="username" type="text" />
              <TextField label="Email" name="email" type="email" />
              <TextField label="Password" name="password" type="password" />
              <button className='text-center bg-blue-500 rounded-lg' type="submit">Register </button>
     
            </Form>
          </div>
        }
      }

    </Formik>
  )
}

export default SignUp