import styled from "styled-components"

const Product = ({ name, price, image }) => {
    const handleClick = (event) => {
        console.log("clicou")
    }
    return (
        <>
            <ProductContainer>
                <ProductImage><img src={image} /></ProductImage>
                <Name>{name}</Name>
                <ProductPrice>
                    <Price>R${price}</Price>
                    <ion-icon name="cart-outline" onClick={handleClick}></ion-icon>
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
const Price = styled.div``
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
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    ion-icon {
        font-size: 20px;
    }

`