import styled from "styled-components";
import FootTownLogo from "../components/logo/Logo";
import ButtonSign from "../components/buttons/ButtonSign";
import axios from "axios";
import Input from "../components/input/Input"

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegistrationPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();


    const userSignUpObject = {
        name, email, password, confirmPassword
    }

    console.log(userSignUpObject);

    const handleSubmit = (e) => {
        e.preventDefault();
        const response = axios.post("http://localhost:5001/sign-up", userSignUpObject)
        response.then((res) => {
            alert("Usuário criado com sucesso");
            navigate("/login");
        }).catch((error) => { console.log(error) })
    }

    return (
        <Container>
            <FootTownLogo />
            <Form onSubmit={handleSubmit}>
                <Input placeholderName='Name' type="text" value={name} setValue={setName} />
                <Input type='email' value={email} placeholderName='Email' setValue={setEmail} />
                <Input type='password' value={password} placeholderName='Password' setValue={setPassword} />
                <Input type='password' value={confirmPassword} placeholderName='Confirm Password' setValue={setConfirmPassword} />
                <ButtonSign buttonName="Sign Up" />
            </Form>
            <SignIn><Link to='/login'> Faça Login </Link></SignIn>

        </Container >
    );
}

export default RegistrationPage;

const Container = styled.div`
    body {
        margin:0;
        padding:0;
    }
    @media (max-width:600px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #373f51;
    }
`;


const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    p {
        color: white;
        text-decoration: none;
    }
`;

const SignIn = styled.div`
    margin-top: 20px;
    a{
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    text-decoration: none;
  }
`