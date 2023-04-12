import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";
import { FaUserAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authServices from "../features/auth/authServices";

const SignUp = () => {
  const validate = Yup.object({
    fullnames: Yup.string().required("Fullnames Required"),
    username: Yup.string().required("Username Required"),
    email: Yup.string().email("Email is Invalid").required(" Email Required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or more")
      .required(" Password Required"),
  });

  const { isLoading, isError, isSuccess, userInfo } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
    if (userInfo) {
      navigate("/user-profile");
    }
  }, [userInfo, isSuccess, navigate]);

  return (
    <Formik
      initialValues={{
        fullnames: "",
        username: "",
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
        dispatch(authServices(values));
      }}
    >
      {(formik) => (
        <div className=" flex flex-col  justify-center items-center p-6 pt-44">
          <h1 className="text-2xl font-bold flex gap-2 ">
            <FaUserAlt /> Sign Up
          </h1>
          <p className="p-4 text">Please Create an Account</p>
          <Form className="h-auto w-[400px] bg-white   shadow-xl rounded-xl px-8 pt-4  pb-8 mb-4">
            <TextField
              label="Full name"
              name="fullnames"
              type="text"
              placeholder="John Doe"
            />
            <TextField
              label="Username"
              name="username"
              type="text"
              placeholder="Doe"
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              placeholder="johndoe@dev.com"
            />
            <TextField label="Password" name="password" type="password" />
            <button
              className="text-center p-2 justify-center bg-blue-500 rounded"
              type="submit"
            >
              Sign Up
            </button>
            <button
              className="text-center p-2 m-2 justify-center bg-red-600 rounded"
              type="reset"
            >
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default SignUp;
