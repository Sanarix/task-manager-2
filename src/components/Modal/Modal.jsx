import './style.css';

export default function Modal({children}) {
	return (
		<div className="wrapper">
			<div className="modal">
				{children}
			</div>
		</div>
	)
}