import { useResize } from "../hook/useResize";

export default function Desctop(Component) {
	const screenSize = useResize();
		return function() {
			return (
				<>
				{screenSize > 992 && 
					<Component />
				}
				</>
			)
		}
}