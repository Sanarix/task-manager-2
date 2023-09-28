import { useResize } from "../hook/useResize"

export default function Mobile(Component) {
	const screenSize = useResize();
		return function() {
			return (
				<>
					{screenSize < 992 && 
						<Component />
					}
				</>
			)
		}
}