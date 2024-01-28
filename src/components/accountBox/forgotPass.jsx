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

const ForgotPass = () => {
  const { switchToSignup } = useContext(AccountContext);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    isVisible: false,
    text: "",
    type: "",
  });

  const handleToastControll = () => {
    setTimeout(() => setToast({ ...toast, isVisible: false }), 5000);
  };

  //validations
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Please enter your username"),
    email: Yup.string().required("Please enter your email"),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
    },

    validationSchema,

    onSubmit: (values) => {
      henleLogin(values);
    },
  });

  const henleLogin = (values) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("username", values.username);
    formData.append("password", values.password);

    axios
      .post(`${url}/login/`, formData)
      .then((res) => {
        setLoading(false);
        res.status >= 200 && res.status < 300
          ? (setToast({
              isVisible: true,
              text: "Wellcom!",
              type: "success",
            }),
            handleToastControll())
          : null;
      })
      .catch((err) => {
        setLoading(false);
        setToast({
          isVisible: true,
          text: "We did not found your Authentication Info",
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

          {/* email */}
          <Input
            placeholder="Email"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <HelperText>{formik.errors.email}</HelperText>
          )}

          <Marginer direction="vertical" margin={10} />

          {/* <MutedLink href="#">
            Forget your{" "}
            <span onClick={switchToForgotpass} className="text-amber-300">
              password
            </span>
            ?
          </MutedLink> */}

          <Marginer direction="vertical" margin={10} />

          <SubmitButton
            style={loading ? { opacity: 0.5 } : {}}
            type={loading ? "button" : "submit"}
          >
            Recover
          </SubmitButton>
          <MutedLink style={{ margin: "0 auto" }} href="/home">
            <BoldLink
              style={{ textDecoration: "underline", color: "#0044CC" }}
              href="/home"
            >
              Return to Home
            </BoldLink>
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
};

export default ForgotPass;
