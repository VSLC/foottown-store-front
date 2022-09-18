import styled from "styled-components";

const Top = styled.div`
    height: 55px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right:40px;
    align-items: center;
    position: fixed;
    top:0;
    left: 0;
    background-color: #58A4B0;
`
const BackButton = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 6px;
    background-color: #D9D9D9;
    box-shadow: 3px 3px 5px #373F51;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 18px;

`

const Content = styled.div`
padding-top: 55px;
    background-color: #58A4B0;
    height: 100vh;
    justify-content: center;
`;
const Form = styled.form`
    width: 250px;
    margin: auto;
    h2{
        text-align: center;
        color: #373F51;
        font-size: 18px;
        margin-top: 10px;
    }
    input{
        width: 250px;
        margin-top: 10px;
        background-color: #D9D9D9;
        box-shadow: 3px 3px 5px #373F51;
        border: none;
        border-radius: 20px;
        height: 30px;
        padding-left: 10px;
        ::placeholder{
            font-weight: 100;
            font-style: italic;
        }
    }
    button{
        border: none;
        position: fixed;
        bottom: 0;
        left: 0;
        height: 50px;
        width: 100vw;
        background-color: #D9D9D9;
        color: #58A4B0;
        font-family: 'Bungee';
        font-size: 32px;

    }

`
export { Top, BackButton, Form, Content };