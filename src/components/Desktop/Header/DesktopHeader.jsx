import Logo from "../../Combined/Header/Logo";
import { Link, useNavigate} from "react-router-dom";
import HeaderElement from '../../Combined/Header/HeaderElement';
import { getAuth, signOut } from "firebase/auth";

export default function DesktopHeader() {
	const navigate = useNavigate();
	const auth = getAuth();

	function moveToLoginPage(e) {
		e.preventDefault();
		navigate('/login');
	}

	function logOut(auth) {
		signOut(auth)
		navigate('/');
	}

	return (
		<>
			<HeaderElement>
				<Logo />
				<nav>
						<a 
							href="https://github.com/Sanarix/Task-manager" 
							target="_blank"
							rel="noreferrer"
							className="nav-link"
						>
								GitHub
						</a>
						<Link className="nav-link" to="/about">О проекте</Link>
						<Link className="nav-link" to="/contacts">Контакты</Link>
					</nav>
							<button
							id="login-btn"
							onClick={(e, navigate) => moveToLoginPage(e, navigate)}
							>
								Войти
							</button>
								<button
								id="login-btn"
								onClick={() => logOut(auth)}
								>
									Выйти
								</button>
			</HeaderElement>
		</>
	)
}