import React from "react";
import { useContext, useState } from "react";
import UserContext from "../contexts/UserContexts.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import logo from '../components/logo/Logo.js'

import {Top, BackButton, Form, Content} from '../components/style/CheckOutStyle.js'

export default function CheckOut(){
    const navigate = useNavigate();
    const {config,setConfig} = useContext(UserContext);

    const [form, setForm] = useState({
        paymentName:'', 
        Address:'', 
        cardNumber: '', 
        Valid:'', 
        cardName:'', 
        CVV: ''
    })

    function handleForm(e) {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    };

    function Buy(e){

        e.preventDefault();

        const request = axios.post('/check-out',form, config);
        request.then(()=>{
            navigate('/');
        });
        request.catch((err)=>{
            console.log(err)
        })
    }

    return(
        <>
        <Top>
            <BackButton onClick={()=>{navigate('/cart')}}>
                <ion-icon name="caret-back-outline"></ion-icon>
            </BackButton>

            {logo}
        </Top>
        <Content>
            <Form onSubmit={Buy}>
                <h2>Informações de Faturação</h2>
                <input type='text' name='paymentName' onChange={handleForm} placeholder='Nome para Fatura' required></input>
                <input type='text' name='Address' onChange={handleForm}  placeholder='Endereço'required></input>
                <h2>Informações de Pagamento</h2>
                <input type='text' name='cardName' onChange={handleForm} placeholder='Nome no Cartão'  required></input>
                <input type='number' name='cardNumber' minLength="16" maxLength="16" onChange={handleForm} placeholder='Número do Cartão'  required></input>
                <input type='date' name='Valid' onChange={handleForm} placeholder='Data de Validade'  required></input>
                <input type='number' name='CVV' minLength="3" maxLength="3" onChange={handleForm} placeholder='CVV' required></input>
                <button type="submit"> COMPRAR </button>
            </Form>
        </Content>
        </>
    )
};