import React from "react";
import { useEffect, useState, useContext } from "react";
import UserContext from "../contexts/UserContexts.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Top, Content, Final, Total, Footer, Product, Items, ProdInfo } from '../components/style/CartStyle.js';

import logo from '../components/logo/Logo.js';

export default function CartPages() {
    const navigate = useNavigate();
    const { config, setConfig } = useContext(UserContext);

    const [items, setItems] = useState([]);


    useEffect(() => {
        const token = localStorage.getItem("token");
        if (Object.keys(config).length === 0) {
            if (!token) {
                alert("Você precisa estar logado");
                navigate("/login");
            } else {
                setConfig({ headers: { Authorization: `Bearer ${token}` } });
            };
        };

        const request = axios.get("https://foottown-projeto14.herokuapp.com/cart", config);

        request.then((response) => {
            setItems(response.data);
        });
        request.catch((err) => {
            console.log(err)
        });

    }, []);
    console.log(items, "afterItens");
    function ReloadItems() {
        return console.log('ok');
    };

    function RemoveItem(element) {
        const body = { itemId: element };
        const request = axios.put('/removeCart', body, config);
        request.then(() => {
            ReloadItems();

        });
        request.catch((err) => {
            console.log(err);
        });

    };


    let total = 0;
    items.map((i) => {
        console.log(i.name, 'name')
        console.log(i._id, 'id')
        total += parseInt(i.price);
    });

    return (
        <>
            <Top>
                {logo}

            </Top>
            <Content>
                <h2> Itens </h2>
                <Items>
                    {items.map((i) => {
                        return (
                            <Product>
                                <img src={i.image} alt='Product Image' />
                                <ProdInfo>
                                    <h3> {i.name} </h3>
                                    <h3> {i.price} </h3>
                                </ProdInfo>
                                <ion-icon name="trash-bin-outline" onClick={() => { RemoveItem(i._id) }}></ion-icon>
                            </Product>);

                    })}
                </Items>


            </Content>
            <Footer>
                <Total>
                    Total: R${total.toFixed(2)}
                </Total>
                <Final onClick={() => { navigate('/check-out') }}>
                    <h1>Finalizar</h1>
                </Final>
            </Footer>


        </>
    );
};