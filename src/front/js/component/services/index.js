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
				<ServicesH1>Nuestros servicios</ServicesH1>
				<ServicesWrapper>
					<ServicesCard>
						<ServicesIcon src={Icon1} />
						<ServicesH2>compra</ServicesH2>
						<ServicesP>productos de tiendas nacionales.</ServicesP>
					</ServicesCard>
					<ServicesCard>
						<ServicesIcon src={Icon2} />
						<ServicesH2>productos variados</ServicesH2>
						<ServicesP>muchas categorias, elige una.</ServicesP>
					</ServicesCard>
					<ServicesCard>
						<ServicesIcon src={Icon3} />
						<ServicesH2>Te ayudamos</ServicesH2>
						<ServicesP>decide si quieres comprar o vender, todos ganamos.</ServicesP>
					</ServicesCard>
				</ServicesWrapper>
			</ServicesContainer>
		</>
	);
};
export default Services;
