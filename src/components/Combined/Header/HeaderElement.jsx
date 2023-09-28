export default function HeaderElement({ children, ...props }) {
	return (
		<header id="header" { ...props }>
			{ children }
		</header>
	)
}