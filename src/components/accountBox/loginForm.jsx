import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  HelperText,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import axios from "axios";
import { url } from "../../axiosConfig/useHttp";
import { useFormik } from "formik";
import * as Yup from "yup";
import { handleShowToast } from "../../functions";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const { switchToForgotpass } = useContext(AccountContext);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    isVisible: false,
    text: "",
    type: "",
  });

  const redirect = (path) => {
    // Perform your redirection logic here
    window.location.href = path;
  };

  const handleToastControll = () => {
    setTimeout(() => setToast({ ...toast, isVisible: false }), 5000);
  };

  //validations
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Please enter your username"),
    password: Yup.string().required("Pease enter your password"),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema,

    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  const handleLogin = async (values) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("username", values.username);
    formData.append("password", values.password);

    await axios
      .post(`${url}/login/`, formData)
      .then((res) => {
        setLoading(false);
        if (res.status >= 200 && res.status < 300) {
          setToast({
            isVisible: true,
            text: "Welcome!",
            type: "success",
          });
          handleToastControll();
          localStorage.setItem("token", res.data.token);
          // Redirect should be placed here, not in a separate then block
          return setTimeout(() => {
            redirect("/");
          }, 500);
        }
      })
      .catch((err) => {
        setLoading(false);
        setToast({
          isVisible: true,
          text: err?.response.data.non_field_errors[0],
          type: "error",
        });
        handleToastControll();
      });
  };

  return (
    <>
      <BoxContainer>
        <FormContainer onSubmit={formik.handleSubmit}>
          {/* username */}
          <Input
            placeholder="Username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {formik.errors.username && formik.touched.username && (
            <HelperText>{formik.errors.username}</HelperText>
          )}

          {/* password */}
          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <HelperText>{formik.errors.password}</HelperText>
          )}

          <Marginer direction="vertical" margin={10} />

          <MutedLink href="#">
            Forget your{" "}
            <span onClick={switchToForgotpass} className="text-amber-300">
              password
            </span>
            ?
          </MutedLink>

          <Marginer direction="vertical" margin={10} />

          <SubmitButton
            style={loading ? { opacity: 0.5 } : {}}
            type={loading ? "button" : "submit"}
          >
            Signin
          </SubmitButton>
          <MutedLink style={{ margin: "0 auto" }}>
            <Link
              style={{ textDecoration: "underline", color: "#0044CC" }}
              to="/"
            >
              Return to Home
            </Link>
          </MutedLink>
        </FormContainer>

        <Marginer direction="vertical" margin="1.6em" />

        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">
          Don't have an accoun?{" "}
          <BoldLink href="#" onClick={switchToSignup}>
            Signup
          </BoldLink>
        </MutedLink>
      </BoxContainer>

      {toast.isVisible && handleShowToast(toast.type, toast.text)}
    </>
  );
}
