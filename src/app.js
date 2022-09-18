import RegistrationPage from "./pages/RegistrationPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CartPage from './pages/CartPage';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import UserContext from "./contexts/UserContexts";
import CheckOutPage from "./pages/CheckOutPage";

const App = () => {
    const [config, setConfig] = useState({});
    return (
        <>
            <BrowserRouter>
            <UserContext.Provider value={{config,setConfig}}>
                <GlobalStyle />
                <Routes>
                    <Route path="/sign-up" element={<RegistrationPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/check-out" element={<CheckOutPage />} />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </UserContext.Provider>
            </BrowserRouter>
        </>
    );
};

export default App;