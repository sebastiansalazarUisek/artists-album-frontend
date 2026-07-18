import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../services/authService";


function ProtectedRoute({ children }) {
    if (isLoggedIn()) {
        return children;
    }
    
    return <Navigate to ="/login" replace />
}

export default ProtectedRoute