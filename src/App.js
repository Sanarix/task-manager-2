import Router from './router/Router';
import './styles/App.css';
import Header from './components/Combined/Header/Header';
import Authorized from './hoc/Authorized';
import AsideMenu from './components/Combined/AsideMenu/AsideMenu';
import { useState} from 'react';
import useAuth from './hook/useAuth';


function App() {
	const [isAuth] = useAuth();
	const AsideMenuWithAuthorized = Authorized(AsideMenu, isAuth);
	const [show, setShow] = useState(false);

	return (
		<>
				<Header />
				<main id="main">
				<AsideMenuWithAuthorized />
					<div id="main-container">
						<Router />
					</div>
				</main>

				<button onClick={() => setShow(true)}>Показать</button>
				<button onClick={() => setShow(false)}>Скрыть</button>
				{show &&
					<h1>Да не упадёт приложение твое!</h1>
				}
		</>
	)
}

export default App;
