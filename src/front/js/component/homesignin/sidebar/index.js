import React, { useState, useContext, useEffect } from "react";
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SidebarRoute
} from "./sidebarElements";
import { Link, useHistory, Redirect } from "react-router-dom";
import { Context } from "../../../store/appContext";
const SideBar = ({ isOpen, toggle }) => {
	const { store, actions } = useContext(Context);
	// const history = useHistory();

	// useEffect(() => {
	// 	actions.getToken();
	// 	if (store.login == false) {
	// 		history.push("/");
	// 	}
	// }, []);
	return (
		<>
			<SidebarContainer isOpen={isOpen} onClick={toggle}>
				<Icon>
					<CloseIcon />
				</Icon>
				<SidebarWrapper>
					<SidebarMenu>
						<SidebarLink to="/costumer">Perfil</SidebarLink>
					</SidebarMenu>

					<Link
						type="submit"
						to="/signin"
						className="dropdown-item"
						id="drop-item"
						onClick={() => {
							actions.logout();
							<Redirect to="signin" />;
						}}>
						Log Out
					</Link>
				</SidebarWrapper>
			</SidebarContainer>
		</>
	);
};
export default SideBar;
