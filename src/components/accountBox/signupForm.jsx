import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import axios from "axios";
import UserTypeCheckBox from "./userTypeCheckbox";
import { useEffect } from "react";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");

  useEffect(() => {
    console.log(userType);
  }, [userType])


  const submitHandler = async () => {
    console.log(userType);
    if (!username){
      // error
      console.log("username is necessary");
    } else if(!password){
            // error
            console.log("password is necessary");
    } else if(!repeatPassword){
            // error
            console.log("rpassword is necessary");
    } else if(!email){
            // error
            console.log("email is necessary");
    } else{
      try{
        const res = await axios.post("http://127.0.0.1:8000/signup/", 
        {
          username,
          email,
          password,
          user_type: "manager"
        });
  
        console.log(res.data);
      } catch(err){
        console.error(err);
      }
    }

  }

  return (
    <BoxContainer>
      <FormContainer>
      <Input type="text" placeholder="Full name" />
        <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <Input type="email" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Input type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)}/>
        <Input type="password" placeholder="Confirm Password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)}/>
        <div>
        <UserTypeCheckBox text={"manager"} setValue={setUserType} />
        <UserTypeCheckBox text={"coach"} setValue={setUserType} />
        <UserTypeCheckBox text={"user"} setValue={setUserType} />
        </div>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={submitHandler}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
