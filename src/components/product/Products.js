import styled from "styled-components"
import UserContext from "../../contexts/UserContexts";
import { useContext } from "react"
import axios from "axios"

const Product = ({ name, price, image, _id }) => {
    const { config, setConfig } = useContext(UserContext);
    function AddItem() {
        console.log(config)
        const body = { itemId: _id };
        console.log(body)
        console.log(body)
        const request = axios.put('http://localhost:5001/addCart', body, config);
        request.then(() => {
            alert('Adicionado com sucesso!')
        });
        request.catch((err) => {
            console.log(err);
        });

    };

    return (
        <>
            <ProductContainer>
                <ProductImage><img src={image} /></ProductImage>
                <Name>{name}</Name>
                <ProductPrice>
                    <Price>R${price}</Price>
                    <ion-icon name="cart-outline" onClick={AddItem}></ion-icon>
                </ProductPrice>
            </ProductContainer>
        </>
    );
}

export default Product;

const ProductContainer = styled.div`
    height: 150px;
    width: 150px;
    background-color: #d9d9d9;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
`;

const Name = styled.div`
    padding: 0 20px;
`
const Price = styled.div`
    margin-top: 2px;
`
const ProductImage = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 0;
    img {
        width:120px;
        height:80px;
        border-radius: 6px;
    }
`
const ProductPrice = styled.div`
    position: relative;
    justify-content: space-between;
    padding: 0 20px;
    ion-icon {
        position: absolute;
        bottom:0;
        right: 15px;
        font-size: 30px;
    }

`