import './style.css';
import { useNavigate } from 'react-router-dom';

export default function DesktopAsideMenu() {
	const navigate = useNavigate();

	return (
		<div id="aside-menu">
			<div 
			className="aside-menu-tab"
			onClick={() => navigate('/new')}
			>
				<p>Новые задачи</p> <span>0</span>
			</div>
			<div className="aside-menu-tab">
				<p>В работе</p> <span>0</span>
				</div>
			<div className="aside-menu-tab">
				<p>Завершенные</p> <span>0</span>
				</div>
				<div className="aside-menu-tab">
				<p>Избранное</p> <span>0</span>
				</div>
			<div id="statistics">
				<h1>Статистика задач</h1>
				<div id="statistics-table">
					<div className="statistics-table-col">
						<h2>Создано</h2>
						<span className="statistics-counter">0</span>
					</div>
					<div className="statistics-table-col">
						<h2>Завершено</h2>
						<span className="statistics-counter">0</span>
					</div>
				</div>
			</div>
		</div>
	)
} 