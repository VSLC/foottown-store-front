import styled from "styled-components";

const Content = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color:#373F51;
    justify-content: center;
`;
const ProdImg = styled.div`
    margin-top: 40px;
    width: 160px;
    margin-left: calc(50vw - 140px);
    img{
        border-radius: 5px;
        width: 280px;
    }
`;
const BackButton = styled.div`
    position: fixed;
    left: calc(50vw - 155px);
    top: 25px;
    width: 30px;
    height: 30px;
    border-radius: 6px;
    background-color: #D9D9D9;
    box-shadow: 3px 3px 5px #373F51;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 18px;

`;
const InfoBox = styled.div`
    background-color: #D9D9D9;
    height: 60vh;
    width: 400px;
    position: fixed;
    bottom: 0;
    left: calc(50vw - 200px);
    justify-content: center;
    box-shadow: 0 -3px 15px black;
    border-radius: 40px 40px 0 0;
    text-align: center;
    h1{
        margin: 10px auto;
        font-family: 'Bungee';
        color: #58A4B0;
    }
    h2{
        margin: 10px auto;
        font-family: 'Roboto';
        font-weight: 300;
        color: #373F51;
    }
    h3{
        margin: 10px auto;
        font-family: 'Roboto';
        font-weight: 700;
        font-style: italic;
        color: #373F51;
    }
    p{
        margin: auto;
        font-family: 'Roboto';
        font-weight: 200;
        color: #373F51;
    }
    @media (max-width:600px){  
        width: 100vw;
        position: fixed;
        bottom: 0;
        left: 0;
        
    };
`;
const Line = styled.div`
    margin: 10px auto 10px auto;
    background-color:#373F51;
    width: 70px;
    height: 2px;
    border-radius: 5px;
`;
const Button = styled.button`
        border: none;
        position: fixed;
        bottom: 20px;
        left: calc(50vw - 160px);
        height: 50px;
        width: 320px;
        background-color: ${params => params.color ? '#A9BCD0' : '#58A4B0'};
        border-radius: 30px;
        color: #D9D9D9;
        font-family: 'Bungee';
        font-size: 20px;
`;

export { Content, Button, BackButton, InfoBox, ProdImg, Line };