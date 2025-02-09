import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getLocalStorage } from "../utility";

export default function PrivateLayout({ children }) {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const token = getLocalStorage('token');
        console.log(token, 'token ----')
        console.log(typeof token, 'typeof token')
        if (!token) {
            console.log('in if kldsjfladsj')
            navigate('/login');
        }
    }, [location, location.pathname])
    return <>{children}</>;
}