export default function Authorized(Component, isAuth = true) {
	return function() {
		return (
			<>
				{isAuth && 
					<Component />
				}
			</>
		)
	}
}