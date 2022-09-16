import RegistrationPage from "./pages/RegistrationPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CartPage from './pages/CartPage.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/sign-up" element={<RegistrationPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;