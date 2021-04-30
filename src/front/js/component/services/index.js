import React from "react";
import { Icon1 } from "../../../img/car.svg";
import { Icon2 } from "../../../img/car.svg";
import { Icon3 } from "../../../img/car.svg";
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
				<ServicesH1>our services</ServicesH1>
				<ServicesWrapper>
					<ServicesCard>
						<ServicesIcon src={Icon1} />
						<ServicesH2>reduce expenses</ServicesH2>
						<ServicesP>we help reduce your fees and increase your overall revenue.</ServicesP>
					</ServicesCard>
					<ServicesCard>
						<ServicesIcon src={Icon2} />
						<ServicesH2>reduce expenses</ServicesH2>
						<ServicesP>we help reduce your fees and increase your overall revenue.</ServicesP>
					</ServicesCard>
					<ServicesCard>
						<ServicesIcon src={Icon3} />
						<ServicesH2>reduce expenses</ServicesH2>
						<ServicesP>we help reduce your fees and increase your overall revenue.</ServicesP>
					</ServicesCard>
				</ServicesWrapper>
			</ServicesContainer>
		</>
	);
};
export default Services;
