import { Routes, Route } from "react-router-dom";
import HomePage from "../routes/HomePage";
import Login from "../routes/Login";
import Registration from '../routes/Registration';
import NewTask from '../routes/tasks/NewTasks';

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="login" element={<Login />}/>
			<Route path="registration" element={<Registration />}/>
			<Route path="/new" element={<NewTask />}/>
		</Routes>
	)
}