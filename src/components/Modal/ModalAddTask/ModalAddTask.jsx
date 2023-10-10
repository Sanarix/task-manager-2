import './style.css';
import { useState } from 'react';
function addTask() {

}

export default function ModalAddTask() {
	const [header, setHeader] = useState('');
	const [text, setText] = useState('');

	return(
		<>
		<h2 className="modal-header">Создание задачи</h2>
		<form className="modal-form">
			<input 
				type="text" 
				placeholder="Заголовок" 
				className="modal-input"
				onChange={(e) => setHeader(e.target.value)}
				value={header}
				/>
			<textarea 
				placeholder="Текст задачи"
				className="modal-textarea"
				onChange={(e) => setText(e.target.value)}
				value={text}
			>	
			</textarea>
			<button 
				type="button"
				className=" modal-close modal-button "
			>
					Создать задачу
			</button>
		</form>
		</>
	)
}