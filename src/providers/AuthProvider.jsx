import { Navigate } from "react-router-dom";
import { route } from "../utils/helper";

function AuthProvider({ children }) {

    const token = localStorage.getItem('token');

    if (!token) return <Navigate to={route('home')} />
    
    return children;
}

export default AuthProvider;