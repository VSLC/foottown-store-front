import styled from "styled-components";
import FootTownLogo from "../components/logo/Logo";
import ButtonSign from "../components/buttons/ButtonSign";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState, useContext, } from "react";
import UserContext from "../contexts/UserContexts.js";


const RegistrationPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { config, setConfig } = useContext(UserContext);
    console.log(config);

    const navigate = useNavigate();

    const userSignUpObject = {
        name,
        email,
        password,
        confirmPassword
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        const response = axios.post("https://foottown-projeto14.herokuapp.com/sign-up", userSignUpObject)
        response.then((res) => {
            console.log(res.data)
            navigate("/login");
        }
        ).catch((error) => { console.log(error) });
    };

    return (
        <Container>
            <FootTownLogo />
            <Form onSubmit={handleSignUp}>
                <Input placeholder='Name' onChange={e => setName(e.target.value)} />
                <Input placeholder='Email' onChange={e => setEmail(e.target.value)} />
                <Input type='password' placeholder='Password' onChange={e => setPassword(e.target.value)} />
                <Input type='password' placeholder='Confirm Password' onChange={e => setConfirmPassword(e.target.value)} />
                <ButtonSign buttonName="Sign Up" />
            </Form>
            <SignIn> <Link to='/login'>Faça login</Link></SignIn>
        </Container >
    );
};

export default RegistrationPage;

const Container = styled.div`
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
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const Input = styled.input`
    width: 250px;
    height: 40px;
    border-radius: 5px;
    border: none;
    background-color: #D9D9D9;
    ::placeholder{
        color: #000;
        padding: 0 20px;
    }
    
`;


const SignIn = styled.p`
  a{
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    text-decoration: none;
  }
  margin-top: 20px;
  
`;