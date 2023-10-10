import './style.css';

export default function ModalAddTask({openModal}) {
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
				className="modal-button"
				onClick={() => {openModal(false)}}
			>
					Создать задачу
			</button>
		</form>
		</>
	)
}