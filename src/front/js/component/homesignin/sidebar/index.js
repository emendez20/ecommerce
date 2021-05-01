import React from "react";
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
const SideBar = ({ isOpen, toggle }) => {
	return (
		<>
			<SidebarContainer isOpen={isOpen} onClick={toggle}>
				<Icon>
					<CloseIcon />
				</Icon>
				<SidebarWrapper>
					<SidebarMenu>
						<SidebarLink to="Perfil">Perfil</SidebarLink>
						<SidebarLink to="productos">productos</SidebarLink>
						<SidebarLink to="todo">todo</SidebarLink>
					</SidebarMenu>
					<SideBtnWrap>
						<SidebarRoute to="/signin"> Sign Out</SidebarRoute>
					</SideBtnWrap>
				</SidebarWrapper>
			</SidebarContainer>
		</>
	);
};
export default SideBar;
