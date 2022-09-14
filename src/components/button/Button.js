import styled from "styled-components";

const ButtonLoginSignUp = ({ buttonName }) => {
    return (
        <>
            <Button>
                {buttonName}
            </Button>
        </>
    );
}

export default ButtonLoginSignUp;


const Button = styled.button`
    margin-top: 20px;
    width: 200px;
    height: 40px;
    border-radius: 31px;
    border:none;
    background-color: #58A4B0;
    color: #fff;
    font-weight: bold;
`;