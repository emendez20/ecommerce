import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
	background-color: #101522 !important;
`;
export const FooterWrap = styled.div`
	padding: 48px 24px !important;
	display: flex !important;
	flex-direction: column !important;
	justify-content: center !important;
	align-items: center !important;
	max-width: 1100px !important;
	margin: 0 auto !important;
`;
export const FooterLinkContainer = styled.div`
	display: flex !important;
	justify-content: center !important;
	@media screen and (max-width: 820px) {
		padding: 32px !important;
	}
`;
export const FooterLinksWrapper = styled.div`
	display: flex !important;
	@media screen and (max-width: 820px) {
		flex-direction: column !important;
	}
`;
export const FooterLinksItem = styled.div`
	display: flex !important;
	flex-direction: column !important;
	align-items: flex-start !important;
	margin: 16px !important;
	text-align: left !important;
	width: 160px !important;
	box-sizing: border-box !important;
	color: #fff !important;
	@media screen and (max-width: 420px) {
		margin: 0 !important;
		padding: 10px !important;
		width: 100% !important;
	}
`;
export const FooterLinkTitle = styled.h1`
	font-size: 14px !important;
	margin-bottom: 16px !important;
`;
export const FooterLink = styled(Link)`
	color: #fff !important;
	text-decoration: none !important;
	margin-bottom: 0.5rem !important;
	font-size: 14px !important;
	&:hover {
		color: #01bf71 !important;
		transition: 0.3 ease-out !important;
	}
`;
export const SocialMedia = styled.section`
	max-width: 1000px !important;
	width: 100% !important;
`;

export const SocialMediaWrap = styled.div`
	display: flex !important;
	justify-content: space-between !important;
	align-items: center !important;
	max-width: 1100px !important;
	margin: 20px auto 20px 20px !important;
	@media screen and (max-width: 820px) {
		flex-direction: column !important;
	}
`;

export const SocialLogo = styled(Link)`
	color: #fff !important;
	justify-self: start !important;
	cursor: pointer !important;
	text-decoration: none !important;
	font-size: 1.5rem !important;
	display: flex !important;
	align-items: center !important;
	margin-bottom: 16px !important;
	font-weight: bold !important;
`;
export const WebsideRights = styled.small`
	color: #fff !important;
	margin-bottom: 16px !important;
`;
export const SocialIcon = styled.div`
	display: flex !important;
	justify-content: space-between !important;
	align-items: center !important;
	width: 240px !important;
`;
export const SocialLink = styled.a`
	color: #fff !important;
	font-size: 24px !important;
`;
