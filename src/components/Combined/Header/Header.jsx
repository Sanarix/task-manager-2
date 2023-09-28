import './style.css';
import Mobile from '../../../hoc/Mobile';
import Desktop from '../../../hoc/Desktop';
import Subheader from '../Subheader/Subheader';

import MobileHeader from '../../Mobile/Header/MobileHeader';
import DesktopHeader from '../../Desktop/Header/DesktopHeader';

export default function Header() {

const HeaderWithMobile = Mobile(MobileHeader);
const HeaderWithDesktop = Desktop(DesktopHeader);

	return (
		<>
			<HeaderWithMobile />
			<HeaderWithDesktop />
			<Subheader />
		</>
	)
}