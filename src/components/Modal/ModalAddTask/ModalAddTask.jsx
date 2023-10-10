import './style.css';

export default function ModalAddTask() {
	return(
		<>
		<h2 className="modal-header">Создание задачи</h2>
		<form className="modal-form">
			<input 
				type="text" 
				placeholder="Заголовок" 
				className="modal-input" />
			<textarea 
				placeholder="Текст задачи"
				className="modal-textarea"
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