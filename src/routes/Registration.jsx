import './styles/Registration.css';
import { 
	getAuth, 
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword
} from 'firebase/auth';
import { useState } from 'react';
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function register(event, email, password, repeatedPassword, navigate) {
	event.preventDefault();

	if(password === repeatedPassword) {

		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			autoLogin(auth, email, password);
			navigate('/');
		}).catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(`${errorCode} : ${errorMessage}`);
		})

	}else {
		alert('Пароли не совпадают')
	}
}

function autoLogin(auth, email, password) {
	signInWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		const user = userCredential.user;
		console.log(user);
		redirect('/login')
	})
	.catch((error) => {
		const errorCode = error.code;
    const errorMessage = error.message;
	})
}

export default function Registration() {
	const [userName, setUserName] = useState('')
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatedPassword, setRepeatedPassword] = useState('');
	const navigate = useNavigate();
	return (
		<form id="registration-form">
			<input 
				className="registration-form-input"
				type="text" 
				placeholder="Имя"
				onChange={e => setUserName(e.target.value)}
				value={userName} />
			<input 
				className="registration-form-input"
				type="text" 
				placeholder="Почта"
				onChange={e => setEmail(e.target.value)}
				value={email} />
			<input 
				className="registration-form-input"
				type="text" 
				placeholder="Пароль"
				onChange={e => setPassword(e.target.value)}
				value={password} />
			<input 
				className="registration-form-input"
				type="text" 
				placeholder="Повтор пароля"
				onChange={e => setRepeatedPassword(e.target.value)}
				value={repeatedPassword} />
			<button 
			id="registration-form-btn"
			onClick={e => register(e, email, password, repeatedPassword, navigate)}
			>
				Зарегистрироваться
			</button>
		</form>
	)
}
