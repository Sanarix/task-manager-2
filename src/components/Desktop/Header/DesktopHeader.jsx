import Logo from "../../Combined/Header/Logo";
import { Link } from "react-router-dom";
import HeaderElement from '../../Combined/Header/HeaderElement';

export default function DesctopHeader() {
	return (
		<>
			<HeaderElement>
				<Logo />
				<nav>
						<a 
							href="https://github.com/Sanarix/Task-manager" 
							target="_blank"
							rel="noreferrer"
						>
								GitHub
						</a>
						<Link to="/about">О проекте</Link>
						<Link to="/contacts">Контакты</Link>
					</nav>
			</HeaderElement>
		</>
	)
}