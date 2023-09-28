import './style.css';
import { useResize } from '../../../hook/useResize';

export default function MobileSubheader() {
	const screen = useResize();
	return (
		<>
		{screen < 992 && 
			<div id="mobile-subheader">
				<div className="mobile-subheader-tab_active">Новые</div>
				<div className="mobile-subheader-tab">В процессе</div>
				<div className="mobile-subheader-tab">Завершённые</div>
			</div>
		}
		</>
	)
}
