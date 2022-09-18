import styled from "styled-components";

const Content = styled.div`
    width: 100vw;
    height: 100vh;
    background-color:#373F51;
    justify-content: center;
`
const ProdImg = styled.div`
    position: relative;
    margin-top: 40px;
    width: 160px;
    margin-left: calc(50vw - 80px);
    img{
        border-radius: 5px;
        width: 160px;
    }
`
const BackButton = styled.div`
    position: fixed;
    top: -15px;
    left: -15px;
    width: 30px;
    height: 30px;
    border-radius: 6px;
    background-color: #D9D9D9;
    box-shadow: 3px 3px 5px #373F51;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 18px;

`
const InfoBox = styled.div`
    background-color: #D9D9D9;
    height: 60vh;
    width: 100vw;
    position: fixed;
    bottom: 0;
    left: 0;
    justify-content: center;
    box-shadow: -6px 0 7px #373F51;
    border-radius: 20px 20px 0 0;
    text-align: center;
    h1{
        font-family: 'Bungee';
        color: #58A4B0;
    }
    h2{
        font-family: 'Roboto';
        font-weight: 300;
        color: #373F51;
    }
    h3{
        font-family: 'Roboto';
        font-weight: 700;
        font-style: italic;
        color: #373F51;
    }
    p{
        font-family: 'Roboto';
        font-weight: 200;
        color: #373F51;
    }
`
const Line = styled.div`
    background-color:#373F51;
    width: 70px;
    height: 2px;
    border-radius: 5px;
`;
const Button = styled`
        border: none;
        position: fixed;
        bottom: 20;
        left: calc(50vw - 80px);
        height: 50px;
        width: 160px;
        background-color: #D9D9D9;
        border-radius: 30px;
        color: ${params=> params.color? '#A9BCD0': '#58A4B0'};
        font-family: 'Bungee';
        font-size: 32px;
`

export{ Content, Button, BackButton, InfoBox, ProdImg, Line };