import DesktopAsideMenu from '../../Desktop/AsideMenu/DesktopAsideMenu'
import Desktop from '../../../hoc/Desktop'

export default function AsideMenu() {
	const AsideMenuWithDesktop = Desktop(DesktopAsideMenu);
	return (
		<AsideMenuWithDesktop />
	)
}