import React, {useContext, useState} from "react";
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
import { Link } from "react-router-dom";
import axios from "axios";

export function LoginForm(props) {
    const {switchToSignup} = useContext(AccountContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const clickHandler = async (e) => {
        e.preventDefault();
        if (!username){
            // needs error handling
            console.error("username is necessary");
        } else if (!password){
            // needs error handling
            console.error("password is necessary");
        } else {
            try {
                const res = await axios.post("https://codeclub-api.liara.run/login/",
                    {
                        username,
                        password
                    });
                console.log(res.data);
                //
                localStorage.setItem("Authorization", res.data.access);
                // back needs to send to front
                // localStorage.setItem("userType", res.data.userType)
            } catch (err){
                console.error(err.message);
            }
        }
    }

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
                <Input type="password" placeholder="Password" value={password}
                       onChange={e => setPassword(e.target.value)}/>
            </FormContainer>
            <Marginer direction="vertical" margin={10}/>
            <MutedLink href="#">Forget your <span className="text-amber-300">password</span>?</MutedLink>
            <Marginer direction="vertical" margin="1.6em"/>
            <SubmitButton type="submit" onClick={clickHandler}>Signin</SubmitButton>
            <Marginer direction="vertical" margin="1em"/>
            <MutedLink href="#">
                Don't have an accoun?{" "}
                <BoldLink href="#" onClick={switchToSignup}>
                    Signup
                </BoldLink>
            </MutedLink>
        </BoxContainer>
    );
}
