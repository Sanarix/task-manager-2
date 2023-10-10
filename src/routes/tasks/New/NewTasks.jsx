import './style.css'

export default function NewTasks({openModal}) {

	return (
		<>
			<header id="new-tasks-header">
				<h2>Новые задачи</h2>
				<button onClick={() => openModal(true)}>Добавить задачу</button>
			</header>
		</>
	)
}