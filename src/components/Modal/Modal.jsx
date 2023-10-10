import './style.css';
import React from 'react';



export default function Modal({children, openModal}) {
	const close = () => {
		openModal(false)
	}

	function closeModal(e) {
	
		/*Для закрытия модального окна первый стиль элемента
		должен быть одним из нижеперечисленных*/
		switch(e.target.classList[0]) {
			case 'wrapper': close()
			break;
			case 'modal-close': close()
			break;
			default: return;
		}
	}

	function closeModalIfEsc(e) {
		if(e.code === 'Escape') {
			close();
			document.removeEventListener('keyup', closeModalIfEsc)
		}
	}

	document.addEventListener('keyup', closeModalIfEsc)

	return (
		<div 
			className="wrapper" 
			onClick={closeModal}
		>
			<div className="modal">
				{React.cloneElement(children, {openModal})}
			</div>
		</div>
	)
}