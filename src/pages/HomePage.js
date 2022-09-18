import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components"
import Logo from "../Assets/logo.png"

import Product from "../components/product/Products"


const HomePage = () => {
    const [productsList, setProductsList] = useState([]);
    console.log(productsList);

    useEffect(() => {
        const response = axios.get("http://localhost:5001/cart")
        response.then((res) => {
            setProductsList(res.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    const productsSport = productsList.filter((e) => e.type === "sport")
    const productsFancy = productsList.filter((e) => e.type === "fancy")

    return (
        <Container>
            <Header>
                <img src={Logo} alt="logo" />
            </Header>
            <AllProducts>
                <Title>Sport</Title>
                <Products>
                    <ProductsSportList>
                        {productsSport.map((element) => <Product name={element.name} price={element.price} image={element.image} />)}
                    </ProductsSportList>
                </Products>
                <Title>Fancy</Title>
                <Products>
                    <ProductsSportList>
                        {productsFancy.map((element) => <Product name={element.name} price={element.price} image={element.image} />)}
                    </ProductsSportList>
                </Products>
            </AllProducts>
            <Footer>
                <Cart>
                    <ion-icon name="cart-outline"></ion-icon>
                    <p className="cart-name">Carrinho</p>
                </Cart>
                <Items>
                    <p>4</p>
                </Items>
            </Footer>
        </Container>
    );
}

export default HomePage

const Container = styled.div`
    @media (max-width:600px){
        display: flex;
        flex-direction: column;
        height: 100vh;
        background-color: #373f51;
        overflow-y: scroll ;
    }
`;

const Header = styled.div`
    z-index: 1;
    position: fixed;
    top: 0;
    left:0;
    background-color:#58a4ba;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    img {
        width: 100px;
    }
`;
const AllProducts = styled.div`
    margin: 100px 0;
`;
const Products = styled.div`
    @media (max-width:600px){  
        margin: 10px 30px; 
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-x: scroll;
        width: 320px;
        
    }
`;

const Title = styled.h1`
    margin-left: 30px;
    color: #58a4ba;
    font-size: 40px;
`;

const ProductsSportList = styled.div`
    display: flex;
    gap: 20px;

`

const Footer = styled.div`
    position: fixed;
    bottom: 0%;
    left: 0;
    background-color:#A9BCD0;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    align-items: center;

`;

const Cart = styled.div`
    display: flex;
    align-items: center;    
    gap: 20px;
    ion-icon{
        font-size: 30px;
    }
    .cart-name{
        font-size: 30px;
        color: #373F51;
    }
`

const Items = styled.div`
    background-color: #D9D9D9;
    padding: 10px;
    border-radius: 50%;
    color:#58A4B0;
`