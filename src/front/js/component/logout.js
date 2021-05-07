import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Button } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";

const Logout = () => {
	const { store, actions } = useContext(Context);
	const hist = useHistory();

	// useEffect(() => {
	// 	actions.getToken();
	// 	if (store.login) {
	// 		hist.push("/login");
	// 	}
	// }, []);
	return (
		<Link
			to="/login"
			onClick={() => {
				actions.logout();
				localStorage.removeItem("token");
			}}>
			LogOut
		</Link>
	);
};

export default Logout;
