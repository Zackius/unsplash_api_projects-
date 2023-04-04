import React from "react";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup"
const SignUp = () => {
  const validate = Yup.object({
    fullnames: Yup.string().required("Fullnames Required"),
    username: Yup.string().required("Username Required" ),
    email: Yup.string().required(" Email Required" ).email("Email is Invalid"),
    password: Yup.string().min(6, "Password must be 6 characters or more").required(" Password Required" )
 
  })
  return (
    <Formik
      initialValues={{
        fullnames: "",
        username: "",
        email: "",
        password: "",
      }}
      validationSchema = {validate}
    >
      {formik => (
        <div className=" flex flex-col  justify-center items-center p-6 pt-44">
          <h1 className="text-2xl font-bold ">Sign Up</h1>
          <Form  className="h-auto w-[400px] bg-white   shadow-md rounded px-8 pt-4  pb-8 mb-4">
            <TextField label="Full name" name="fullname" type="text" />
            <TextField label="Username" name="username" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <button
              className="text-center bg-blue-500 rounded"
              type="submit">Sign Up
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SignUp;
