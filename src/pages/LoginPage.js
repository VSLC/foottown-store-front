import styled from "styled-components";
import FootTownLogo from "../components/logo/Logo"
import axios from "axios"
import ButtonSign from "../components/buttons/ButtonSign"
import Input from "../components/input/Input"
import { useState, useContext } from "react"
import { useNavigate, Link } from "react-router-dom";
import UserContext from "../contexts/UserContexts.js";


const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { config, setConfig } = useContext(UserContext);
    const navigate = useNavigate();
    console.log(config)

    const userLoginObject = {
        email,
        password
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const response = axios.post("http://localhost:5001/login", userLoginObject)
        response.then((res) => {
            setConfig(res.data)
            localStorage.setItem("token", res.data)
            navigate("/");
        }
        ).catch((error) => { console.log(error) })
    }

    return (
        <Container>
            <FootTownLogo />
            <Form onSubmit={handleLogin}>
                <Input placeholderName='email' setValue={setEmail} />
                <Input placeholderName='password' setValue={setPassword} />
                <ButtonSign buttonName="Login" />
            </Form>
            <SignUp> <Link to='/sign-up'>Faça cadastro</Link></SignUp>
        </Container >
    );
}

export default LoginPage;

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
    align-items:center;
    flex-direction: column;
    gap: 10px;
    p{
        color: white;
    }
`;

const SignUp = styled.p`
  a{
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    text-decoration: none;
  }
  margin-top: 20px;
  
`;