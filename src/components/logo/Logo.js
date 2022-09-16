import logo from "../../Assets/logo.png"
import styled from "styled-components"

const FootTownLogo = () => {
    return (
        <>
            <Logo>
                <img src={logo} alt="logo" />
            </Logo>
        </>
    );
}
export default FootTownLogo

const Logo = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;