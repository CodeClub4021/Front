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
import UserTypeCheckBox from "./userTypeCheckbox";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { url } from "../../axiosConfig/useHttp";
import { handleShowToast } from "../../functions";
import { redirect, useNavigate } from "react-router-dom";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("");
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
    username: Yup.string().required("Please enter this field"),
    password: Yup.string().required("Please enter this field"),
    // repeatPassword: Yup.string().required("Please enter this field"),
    email: Yup.string().required("Please enter this field"),
    role: Yup.string(),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      // repeatPassword: "",
      email: "",
      role: role,
    },

    validationSchema,

    onSubmit: (values) => {
      role.length !== 0 ? handleSignup(values) : null;
    },
  });

  const handleSignup = (values) => {
    // console.log(role);
    setLoading(true);
    const formData = new FormData();
    formData.append("username", formik.values.username);
    formData.append("email", formik.values.email);
    formData.append("password", formik.values.password);
    formData.append("role", role);

    axios
      .post(`${url}/register/`, formData)
      .then((res) => {
        setLoading(false);
        res.status >= 200 && res.status < 300
          ? (setToast({
              isVisible: true,
              text: "Wellcom!",
              type: "success",
            }),
            handleToastControll(),
            navigate("/login"),
            window.location.reload())
          : null;
      })
      .catch((err) => {
        console.log(err?.response.data);
        setLoading(false);
        setToast({
          isVisible: true,
          text: err?.response.data.email || err?.response.data.username,
          type: "error",
        });
        handleToastControll();
      });
  };

  return (
    <>
      <BoxContainer className="pb-3">
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
            type="email"
            placeholder="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <HelperText>{formik.errors.email}</HelperText>
          )}

          {/* password */}
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <HelperText>{formik.errors.password}</HelperText>
          )}
          {/* repeat pass */}
          {/* <Input
            type="password"
            placeholder="Confirm Password"
            name="repeatPassword"
            value={formik.values.repeatPassword}
            onChange={formik.handleChange}
          />
          {formik.errors.repeatPassword && formik.touched.repeatPassword && (
            <HelperText>{formik.errors.repeatPassword}</HelperText>
          )} */}

          <div className="flex justify-between">
            <UserTypeCheckBox text={"manager"} setValue={setRole} />
            <UserTypeCheckBox text={"coach"} setValue={setRole} />
            <UserTypeCheckBox text={"customer"} setValue={setRole} />
          </div>
          {role.length == 0 && formik.touched.password && (
            <HelperText>{"Please select role"}</HelperText>
          )}

          <Marginer direction="vertical" margin={10} />

          <SubmitButton
            style={loading ? { opacity: 0.5 } : {}}
            type={loading ? "button" : "submit"}
          >
            Signup
          </SubmitButton>

          <Marginer direction="vertical" margin="1em" />

          <MutedLink style={{ margin: "0 auto" }} href="#">
            Already have an account?
            <BoldLink href="#" onClick={switchToSignin}>
              Signin
            </BoldLink>
          </MutedLink>
        </FormContainer>
      </BoxContainer>

      {toast.isVisible && handleShowToast(toast.type, toast.text)}
    </>
  );
}
