import Header from "../components/Combined/Header/Header";
import Authorized from '../hoc/Authorized';
import AsideMenu from '../components/Combined/AsideMenu/AsideMenu';

export default function  HomePage() {
	const AsideMenuWithAuthorized = Authorized(AsideMenu);
	return (
		<>
			<Header />
			<AsideMenuWithAuthorized />
			Стартовая страница
		</>
	)
}