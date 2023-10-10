import Router from './router/Router';
import './styles/App.css';
import Header from './components/Combined/Header/Header';
import Authorized from './hoc/Authorized';
import AsideMenu from './components/Combined/AsideMenu/AsideMenu';
import { useState, useEffect } from 'react';
import useAuth from './hook/useAuth';
import Modal from './components/Modal/Modal';
import ModalAddTask from './components/Modal/ModalAddTask/ModalAddTask';


function App() {
	const [isAuth] = useAuth();
	const AsideMenuWithAuthorized = Authorized(AsideMenu, isAuth);
	const [show, setShow] = useState(false);
	const [modal, setModal] = useState(false);

	//Следим за открытием модального окна
	useEffect(() => {
		console.log(modal);
	}, [modal])

	return (
		<>
				<Header />
				<main id="main">
				<AsideMenuWithAuthorized />
					<div id="main-container">
						<Router openModal={setModal}/>
					</div>
				</main>

				<button onClick={() => setShow(true)}>Показать</button>
				<button onClick={() => setShow(false)}>Скрыть</button>
				
				{modal && <Modal><ModalAddTask openModal={setModal}/></Modal>}

				{show &&
					<h1>Да не упадёт приложение твое!</h1>
				}
		</>
	)
}

export default App;
