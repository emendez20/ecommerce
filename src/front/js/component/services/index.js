import React from "react";
import Icon1 from "../../../img/shop.png";
import Icon2 from "../../../img/super.png";
import Icon3 from "../../../img/purchase.png";
import img from "../../../img/img1.jpg";
import img2 from "../../../img/img2.jpg";
import img3 from "../../../img/img3.jpg";
import {
	ServicesContainer,
	ServicesH1,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesH2,
	ServicesP
} from "./servicesElements";
const Services = () => {
	return (
		<>
			<ServicesContainer id="services">
				<ServicesH1>Nuestros beneficios</ServicesH1>
				<ServicesWrapper>
					<ServicesCard>
						<ServicesIcon src={Icon1} />
						<ServicesH2>Compra seguro</ServicesH2>
						<ServicesP>Apoya las Pymes nacionales.</ServicesP>
					</ServicesCard>
					<ServicesCard>
						<ServicesIcon src={Icon2} />
						<ServicesH2>Variedad de productos</ServicesH2>
						<ServicesP>Además de ofertas especiales y servicios</ServicesP>
					</ServicesCard>
					<ServicesCard>
						<ServicesIcon src={Icon3} />
						<ServicesH2>Todos ganan</ServicesH2>
						<ServicesP>Ofrecemos la mejor experiencia de e-commerce del país.</ServicesP>
					</ServicesCard>
				</ServicesWrapper>
			</ServicesContainer>
		</>
	);
};
export default Services;
