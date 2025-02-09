import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getLocalStorage } from "../utility";

export default function PublicLayout({ children }) {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const token = getLocalStorage('token');
        if (token) {
            navigate('/');
        }
    }, [location, location.pathname])
    return <>{children}</>;
}