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

    return (
        <Container>
            <Header>
                <img src={Logo} alt="logo" />
            </Header>
            <Products>
                <Title>Sport </Title>
                <ProductsSportList>
                    {productsSport.map((element) => <Product name={element.name} price={element.price} image={element.image} />)}
                </ProductsSportList>
            </Products>
        </Container>
    );
}

export default HomePage

const Container = styled.div`
    @media (max-width:600px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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

const Products = styled.div`
    display: flex;
    background-color: red;
    width: 400px;
    height: 100vh;
    margin: 200px ;
`;

const Title = styled.h1`
    color: #58a4ba;
    font-size: 40px;
    margin: 20px 0;
    z-index: 2;
`;

const ProductsSportList = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
`