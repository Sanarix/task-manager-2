import Mobile from "../../../hoc/Mobile"
import MobileSubheader from "../../Mobile/Subheader/MobileSubheader";

export default function Subheader() {
	const SubheaderWithMobile = Mobile(MobileSubheader);
	return (
		<>
			<SubheaderWithMobile/>
		</>
	)
}