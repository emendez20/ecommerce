import React from "react";

import {
	InfoContainer,
	InfoWrapper,
	InfoRow,
	Column1,
	Column2,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	BtnWrap,
	ImgWrap,
	Img
} from "../../styles/infoElements";
const InfoSection = ({
	lightBg,
	id,
	imgStart,
	topLine,
	lightText,
	headline,
	darkText,
	description,
	buttonLabel,
	img,
	alt,
	primary,
	dark,
	dark2,
	direccion,
	primero,
	segundo,
	tercero,
	cuarto,
	quinto,
	sexto
}) => {
	return (
		<>
			<InfoContainer lightBg={lightBg} id={id}>
				<InfoWrapper>
					<InfoRow imgStart={imgStart}>
						<Column1>
							<TextWrapper>
								<TopLine>{topLine} </TopLine>
								<Heading lightText={lightText}>{headline} </Heading>
								<Subtitle darkText={darkText}>{description}</Subtitle>
								<Heading lightText={lightText}>{primero} </Heading>
								<Subtitle darkText={darkText}>{segundo}</Subtitle>
								<Heading lightText={lightText}>{tercero} </Heading>
								<Subtitle darkText={darkText}>{cuarto}</Subtitle>
								<Heading lightText={lightText}>{quinto} </Heading>
								<Subtitle darkText={darkText}>{sexto}</Subtitle>
								<BtnWrap />
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={img} />
							</ImgWrap>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</>
	);
};
export default InfoSection;
