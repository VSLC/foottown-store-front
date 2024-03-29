import React from "react";
import { useContext, useState, useEffect } from "react";
import UserContext from "../contexts/UserContexts.js";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import logo from '../components/logo/Logo.js';

import { Content, Button, BackButton, InfoBox, ProdImg, Line } from '../components/style/InfoStyle.js'

export default function Info() {
    const params = useParams();
    const navigate = useNavigate();
    const { config, setConfig } = useContext(UserContext);
    const [product, setProduct] = useState({});

    let itemOnCart = false;

    function AddItem() {
        const body = { itemId: product._id };
        const request = axios.put('/addCart', body, config);
        request.then(() => {
            alert('Adicionado com sucesso!')
        });
        request.catch((err) => {
            console.log(err);
        });
    };
    useEffect(() => {

        const requestProduct = axios.get(`https://foottown-projeto14.herokuapp.com/product/${params.idProduct}`, config);
        requestProduct.then((response) => {
            setProduct(response.data);
        });
        requestProduct.catch((err) => {
            console.log(err)
            navigate('/');
        });
        const requestCart = axios.get("https://foottown-projeto14.herokuapp.com/cart", config);
        requestCart.then((response) => {
            let itemslist = response.data;
            itemOnCart = itemslist.some(element => {
                if (element._id === product._id) {
                    return true;
                };
                return false;
            });
        });

    }, []);
    return (
        <>
            <Content>
                <ProdImg>
                    <BackButton>
                        <ion-icon name="caret-back-outline"></ion-icon>
                    </BackButton>
                    <img src={product.image} />
                </ProdImg>
            </Content>
            <InfoBox>
                <Line></Line>
                <h1> {product.name}</h1>
                <h2>{product.type}</h2>
                <h3>Informações</h3>
                <p>{product.description}</p>
                {itemOnCart ? (
                    <Button color={itemOnCart}>
                        Item no carrinho
                    </Button>
                ) :
                    <Button color={itemOnCart} onClick={AddItem}>
                        ADICIONAR AO CARRINHO
                    </Button>
                }
            </InfoBox>
        </>
    );
};