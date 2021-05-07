import React from "react";
import Icon1 from "../../img/paint.jpg";
import Icon2 from "../../img/cat.png";
import Icon3 from "../../img/sculpture.png";
import {
	ServicesContainer,
	ServicesH1,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesH2,
	ServicesP
} from "../../styles/servicesElements";
const Services = () => {
	return (
		<>
			<ServicesContainer id="services">
				<ServicesH1>What we offer</ServicesH1>
				<ServicesWrapper>
					<ServicesCard>
						<ServicesIcon src={Icon1} />
						<ServicesH2>Paintings</ServicesH2>
						<ServicesP />
					</ServicesCard>
					<ServicesCard>
						<ServicesIcon src={Icon2} />
						<ServicesH2>Drawings</ServicesH2>
						<ServicesP />
					</ServicesCard>
					<ServicesCard>
						<ServicesIcon src={Icon3} />
						<ServicesH2>Sculptures</ServicesH2>
						<ServicesP />
					</ServicesCard>
				</ServicesWrapper>
			</ServicesContainer>
		</>
	);
};
export default Services;
