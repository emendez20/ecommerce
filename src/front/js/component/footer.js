import React from "react";
import { animateScroll as scroll } from "react-scroll";

import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import {
	FooterContainer,
	FooterWrap,
	FooterLinkContainer,
	FooterLinksWrapper,
	FooterLinksItem,
	FooterLinkTitle,
	FooterLink,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	WebsideRights,
	SocialIcon,
	SocialLink
} from "../../styles/FooterElements";
const Footer = () => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};
	return (
		<>
			<FooterContainer className="d-flex mt-5 self-align-center text-align center self-align-center justify-content-center">
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/" onClick={toggleHome}>
							amArte
						</SocialLogo>
						<WebsideRights>amArte © {new Date().getFullYear()} All rights reserved</WebsideRights>
						<SocialIcon>
							<SocialLink href="https://www.facebook.com" target="_blank" aria-label="Facebook">
								<FaFacebook />
							</SocialLink>
							<SocialLink href="https://www.instagram.com" target="_blank" aria-label="Instagram">
								<FaInstagram />
							</SocialLink>
							<SocialLink href="https://www.youtube.com" target="_blank" aria-label="Youtube">
								<FaYoutube />
							</SocialLink>
							<SocialLink href="https://www.twitter.com" target="_blank" aria-label="Twitter">
								<FaTwitter />
							</SocialLink>
						</SocialIcon>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterContainer>
		</>
	);
};
export default Footer;
