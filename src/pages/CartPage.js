import React from "react";
import { useEffect, useState, useContext } from "react";
import UserContext from "../contexts/UserContexts.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Top, Content, Final, Total, Footer, Product, Items,ProdInfo } from '../components/style/CartStyle.js';

import logo from '../components/logo/Logo.js'

export default function CartPages(){
    const navigate = useNavigate();
    const {config,setConfig} = useContext(UserContext);

    let items =[];

    useEffect(()=>{

        const request = axios.get("http://localhost:5001/cart", config);

        request.then((response)=>{
            items = response.data;
        });
        request.catch((err)=>{
            console.log(err)
        });

    },[ReloadItems]);
    function ReloadItems(){
        return console.log('ok');
    };

    function RemoveItem(element){
        const body = {itemId: element};
        const request = axios.put('/removeCart', body, config);
        request.then(()=>{
            ReloadItems();
            
    });
        request.catch((err)=>{
            console.log(err);
        });

    };

    let total =0;
    items.map((i)=>{
        total+=i.value;
    })

    return(
        <>
        <Top>
            {logo}

        </Top>
        <Content>
            <h2> Itens </h2>
            <Items>
                {items.map((i)=>{
                    <Product>
                        <img src={i.image} alt='Product Image' />
                        <ProdInfo>
                            <h3> {i.name} </h3>
                            <h3> {i.value} </h3>
                        </ProdInfo>
                        <ion-icon name="trash-bin-outline" onClick={()=>{RemoveItem(i._id)}}></ion-icon>
                    </Product>
                })}
            </Items>
            
        
        </Content>
        <Footer>
            <Total>
                Total: R${total.toFixed(2)}
            </Total>
            <Final>
            <h1>Finalizar</h1>
            </Final>
        </Footer>

    
        </>
    )
};