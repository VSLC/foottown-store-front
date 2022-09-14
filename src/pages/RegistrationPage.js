import styled from "styled-components";
import FootTownLogo from "../components/logo/Logo"
import ButtonLoginSignUp from "../components/button/Button";
import { useState } from "react"

const RegistrationPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    console.log(name, email, password, confirmPassword)

    return (
        <Container>
            <FootTownLogo />
            <Form>
                <Input placeholder='Name' onChange={e => setName(e.target.value)} />
                <Input placeholder='Email' onChange={e => setEmail(e.target.value)} />
                <Input type='password' placeholder='Password' onChange={e => setPassword(e.target.value)} />
                <Input type='password' placeholder='Confirm Password' onChange={e => setConfirmPassword(e.target.value)} />
            </Form>
            <ButtonLoginSignUp buttonName="Sign Up" />
        </Container >
    );
}

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


const Button = styled.button`
    margin-top: 20px;
    width: 200px;
    height: 40px;
    border-radius: 31px;
    border:none;
    background-color: #58A4B0;
    color: #fff;
    font-weight: bold;
`;