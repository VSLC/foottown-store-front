import styled from "styled-components"

const Product = ({ name, price, image }) => {
    return (
        <>
            <ProductContainer>
                <ProductImage><img src={image} /></ProductImage>
                <Name>{name}</Name>
                <ProductPrice>
                    <Price>R${price}</Price>
                    <ion-icon name="cart-outline"></ion-icon>
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



`;

const Name = styled.div``
const Price = styled.div``
const ProductImage = styled.div`
    img {
        width:80px;
        height:60px;
        border-radius: 6px;
    }
`
const ProductPrice = styled.div`
    display: flex;
    justify-content: space-between;

`