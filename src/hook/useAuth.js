import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect} from "react";
import { getAuth } from "firebase/auth";

export default function useAuth() {
	const [isAuth, setIsAuth] = useState(null)

	useEffect(() => {
		const auth = getAuth();

		onAuthStateChanged(auth, user => {
			if (user) {
				setIsAuth(true);
			} else {
				setIsAuth(false);
			}
		})
	})

	return [isAuth]
}