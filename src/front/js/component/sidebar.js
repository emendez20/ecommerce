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
} from "../../styles/sidebarsElements";
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
							Who we are
						</SidebarLink>
						<SidebarLink to="services" onClick={toggle}>
							What we offer
						</SidebarLink>
						<SidebarLink to="signup" onClick={toggle}>
							Contact
						</SidebarLink>
					</SidebarMenu>
					<SideBtnWrap>
						<SidebarRoute to="/signin">Cart</SidebarRoute>
						<SidebarRoute to="/signin">Sign out</SidebarRoute>
					</SideBtnWrap>
				</SidebarWrapper>
			</SidebarContainer>
		</>
	);
};
export default SideBar;
