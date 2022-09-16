import styled from "styled-components"
import { useState } from "react"

const InputForm = ({ placeholderName, setValue }) => {
    const [change, setChange] = useState("");
    console.log(setValue);
    return (
        <>
            <Input placeholder={placeholderName} onChange={(e) => { setValue(e.target.value) }} />
        </>
    );
}

export default InputForm;

const Input = styled.input`
    width: 250px;
    height: 40px;
    border-radius: 5px;
    border: none;
    background-color: #D9D9D9;
    ::placeholder{
        color: #000;
        padding: 0 20px;
    }
    
`;