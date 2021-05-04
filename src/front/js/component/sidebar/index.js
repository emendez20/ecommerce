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
} from "./sidebarsElements";
const SideBar = ({ isOpen, toggle }) => {
	return (
		<>
			<SidebarContainer isOpen={isOpen} onClick={toggle}>
				<Icon onClick={toggle}>
					<CloseIcon />
				</Icon>
				<SidebarWrapper>
					<SidebarMenu>
						<SidebarLink to="about" onClick={toggle}>
							decide
						</SidebarLink>
						<SidebarLink to="services" onClick={toggle}>
							servicios
						</SidebarLink>
						<SidebarLink to="signup" onClick={toggle}>
							Únete
						</SidebarLink>
					</SidebarMenu>
					<SideBtnWrap>
						<SidebarRoute to="/signin"> Iniciar sesíon</SidebarRoute>
					</SideBtnWrap>
				</SidebarWrapper>
			</SidebarContainer>
		</>
	);
};
export default SideBar;
