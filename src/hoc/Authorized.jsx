export default function Authorized(Component, isAuth) {
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