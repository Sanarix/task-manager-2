import './styles/Login.css';
import images from '../assets/images';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

//Компонент отвечающий за показ/скрытие пароля
function PasswordControl() {
	const [showPassword, setShowPassword] = useState(false);

	function toggleShowPassword(e) {
		//Смена типа у input
		showPassword ?
		e.target.parentNode.children[0].type="password" :
		e.target.parentNode.children[0].type="text" 

		setShowPassword(!showPassword);
	}

	return (
		<img 
			onClick={(e) => toggleShowPassword(e)}
			className="password-control"
			src={showPassword? images.icons.eyeClosed : images.icons.eye} 
			alt="check" 
		/>
	)
}

export default function Login() {
	const navigate = useNavigate();
	const {state} = useLocation()

	const auth = getAuth();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function moveToRegisterPage(e, navigate) {
		e.preventDefault()
		navigate('/registration');
	}

	async function logIn(e, auth, email, password) {
		e.preventDefault();
		await signInWithEmailAndPassword(auth, email, password);
		navigate(state?.path || '/');
	}

	return (
		<form id="login-form">
			<div className='form-input'>
				<input
					className="login-form-input"
					id="login-name" 
					type="email" 
					placeholder="Почта"
					onChange={(e) => setEmail(e.target.value)}
					value={email} />
			</div>
			<div className="form-input">
				<input 
					className="login-form-input"
					id="login-password" 
					type="password" 
					placeholder="Пароль"
					onChange={(e) => setPassword(e.target.value)}
					value={password} />
					<PasswordControl />
			</div>
			<div>
				<button
					className="login-form-btn"
					onClick={(e) => logIn(e, auth, email, password)}
				>
					Войти
				</button>
				<button 
					className="login-form-btn"
					onClick={(e) => moveToRegisterPage(e, navigate)}
					>
						Зарегистироваться
				</button>
			</div>
		</form>
	)
}