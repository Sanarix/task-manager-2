import { Routes, Route } from "react-router-dom";
import HomePage from "../routes/HomePage";
import Login from "../routes/Login";
import Registration from '../routes/Registration';
import NewTask from '../routes/tasks/New/NewTasks';
import RequiredAuth from "../hoc/RequiredAuth";

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="login" element={<Login />}/>
			<Route path="registration" element={<Registration />}/>
			<Route 
				path="/new" 
				element={<RequiredAuth><NewTask /></RequiredAuth>}/>
		</Routes>
	)
}