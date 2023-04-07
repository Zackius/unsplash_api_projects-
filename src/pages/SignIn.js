import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
import { FaSignInAlt } from "react-icons/fa"
import { useState, useEffect } from "react";

const SignIn = () => {
  const validate = Yup.object({
    username: Yup.string().required("Username Required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or more")
      .required(" Password Required"),
  });

  const [register, setRegister] = useState({
    
  })
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div className=" flex flex-col  justify-center items-center p-6 pt-44">
          <h1 className="text-2xl font-bold flex  gap-2 "><FaSignInAlt size={30} />Sign In</h1>
          <p>Please Log In</p>
          <Form className="h-auto w-[400px] bg-white   shadow-md rounded-xl px-8 pt-4  pb-8 mb-4">
            <TextField label="Username" name="username" type="text" />
            <TextField label="Password" name="password" type="password" />
            <button
              className="text-center p-2 justify-center bg-blue-500 rounded"
              type="submit"
            >
              Login
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
export default SignIn;
