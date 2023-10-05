import { useNavigate } from "react-router-dom"

export default function Logo() {
	const navigate = useNavigate();
	return (
		<h1 onClick={() => navigate('/')}>
			Task Manager 2.0
		</h1>
	)
}