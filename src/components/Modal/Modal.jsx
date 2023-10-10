import './style.css';
import React from 'react';



export default function Modal({children, openModal}) {
	function closeModal(e) {
		/*Для закрытия модального окна первый стиль элемента
		должен быть одним из нижеперечисленных*/
		switch(e.target.classList[0]) {
			case 'wrapper': openModal(false)
			break;
			case 'modal-close': openModal(false)
			break;
			default: return;
		}
	}

	return (
		<div className="wrapper" onClick={closeModal}>
			<div className="modal">
				{React.cloneElement(children, {openModal})}
			</div>
		</div>
	)
}