import Logo from "../../Combined/Header/Logo";
import HeaderElement from '../../Combined/Header/HeaderElement';

export default function MobileHeader() {
	return (
		<>
			<HeaderElement>
				<Logo />
				<button id="burger">
					<img 
						src="https://www.svgrepo.com/show/506795/burger-menu-right.svg" alt="burger" 
					/>
				</button>
			</HeaderElement>
		</>
	)
}