import useAuth from "../hook/useAuth";
import { Navigate, useLocation } from "react-router-dom";

export default function RequiredAuth({children}) {
	const [isAuth] = useAuth();
	const location = useLocation()
	return isAuth === false ? 
	<Navigate to="/login" replace state={{path: location.pathname}} /> : 
	children
}