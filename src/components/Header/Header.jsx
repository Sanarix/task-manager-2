import './style.css';
import { Link } from 'react-router-dom';
import { useResize } from '../../hook/useResize';

export default function Header() {

	const width = useResize();

	return (
		<header id="header">

			<div id="logo">Task Manager 2.0</div>
			{width < 1024 && 
				<button>Меню</button>
			}

			{
				width > 1024 &&
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
			}
		</header>
	)
}