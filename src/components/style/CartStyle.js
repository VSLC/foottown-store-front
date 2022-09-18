import styled from "styled-components";

const Content = styled.div`
    background-color: #373F51;
    border-bottom: #A9BCD0 1px;
    margin-top: 55px;
    height: 100vh;

    h2{
        width: 165px;
        margin: auto;
    }
`;

const Top = styled.div`
    background-color:  #373F51;
    height: 55px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 20px auto;
    position: fixed;
    top:0;
`;
const Product = styled.div`
    display: flex;
    width: 165px;
    height: 45px;
    background-color:#373F51;
    padding: 5px;
    justify-content: space-between;

    img{
        height: 35px;
        margin: auto;
    }
`;
const ProdInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Items = styled.div`
    height: calc(100vw- 200px );
    justify-content: center;
    margin: auto;
    scroll-behavior: auto;
`;
const Total = styled.div`
    background-color: #D9D9D9;
    height: 25px;
    width: 100vw ;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Final = styled.div`
    background-color: #58A4B0;
    height: 50px;
    width: 100vw ;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    

`;
const Footer = styled.div`
    position: fixed;
    bottom: 0px;
    left: 0;
    box-shadow: -5px 5px #373F51;
`


export { Top, Content, Final, Total, Footer,Product, Items, ProdInfo };