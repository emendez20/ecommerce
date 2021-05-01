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
} from "./FooterElements";
const Footer = () => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};
	return (
		<>
			<FooterContainer>
				<FooterWrap>
					<FooterLinkContainer>
						<FooterLinksWrapper>
							<FooterLinksItem>
								<FooterLinkTitle> About us</FooterLinkTitle>
								<FooterLink to="/signin">How it works</FooterLink>
								<FooterLink to="/signin">testimonials</FooterLink>
								<FooterLink to="/signin">careers</FooterLink>
								<FooterLink to="/signin">investors</FooterLink>
								<FooterLink to="/signin">Terns of service</FooterLink>
							</FooterLinksItem>
							<FooterLinksItem>
								<FooterLinkTitle> About us</FooterLinkTitle>
								<FooterLink to="/signin">How it works</FooterLink>
								<FooterLink to="/signin">testimonials</FooterLink>
								<FooterLink to="/signin">careers</FooterLink>
								<FooterLink to="/signin">investors</FooterLink>
								<FooterLink to="/signin">Terns of service</FooterLink>
							</FooterLinksItem>
						</FooterLinksWrapper>
						<FooterLinksWrapper>
							<FooterLinksItem>
								<FooterLinkTitle> About us</FooterLinkTitle>
								<FooterLink to="/signin">How it works</FooterLink>
								<FooterLink to="/signin">testimonials</FooterLink>
								<FooterLink to="/signin">careers</FooterLink>
								<FooterLink to="/signin">investors</FooterLink>
								<FooterLink to="/signin">Terns of service</FooterLink>
							</FooterLinksItem>
							<FooterLinksItem>
								<FooterLinkTitle> Social Media</FooterLinkTitle>
								<FooterLink to="/signin">Instagram</FooterLink>
								<FooterLink to="/signin">Facebook</FooterLink>
								<FooterLink to="/signin">Youtube</FooterLink>
								<FooterLink to="/signin">Twitter</FooterLink>
								<FooterLink to="/signin">GitHub</FooterLink>
							</FooterLinksItem>
						</FooterLinksWrapper>
					</FooterLinkContainer>
				</FooterWrap>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/homesignin" onClick={toggleHome}>
							Ticompras
						</SocialLogo>
						<WebsideRights>Ticompras © {new Date().getFullYear()} All rights reserved</WebsideRights>
						<SocialIcon>
							<SocialLink href="/" target="_blank" aria-label="Facebook">
								<FaFacebook />
							</SocialLink>
							<SocialLink href="/" target="_blank" aria-label="Instagram">
								<FaInstagram />
							</SocialLink>
							<SocialLink href="/" target="_blank" aria-label="Youtube">
								<FaYoutube />
							</SocialLink>
							<SocialLink href="//www.twitter.com" target="_blank" aria-label="Twitter">
								<FaTwitter />
							</SocialLink>
							<SocialLink href="/" target="_blank" aria-label="GitHub">
								<FaGithub />
							</SocialLink>
						</SocialIcon>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterContainer>
		</>
	);
};
export default Footer;
