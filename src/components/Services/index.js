import React from "react";
import firstIcon from "../../images/svg-4.svg";
import secondIcon from "../../images/svg-5.svg";
import thirdIcon from "../../images/svg-6.svg";
import {
  ServicesWrapper,
  ServicesContainer,
  ServicesCard,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
} from "./ServicesElements";
const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={firstIcon} alt="monitor"/>
          <ServicesH2>Research</ServicesH2>
          <ServicesP>
            We ask questions, discuss and prototype, as changing ideas is
            cheaper than changing products. As well as challenging usual
            solutions to find best fit approach for each project.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={secondIcon} alt="laptop"/>
          <ServicesH2>Planning</ServicesH2>
          <ServicesP>
            Our software development company makes detailed planning for each
            project, and keep transparency till very ending. Daily meetings and
            weekly demos helps to keep to implement immediate feedback and stay
            on track.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={thirdIcon} alt="plan"/>
          <ServicesH2>Delivery</ServicesH2>
          <ServicesP>
            We focus on delivering on time and our responsibility to client and
            other teams. Our software developers try to deliver MVP as soon as
            possible, analyze customers feedback and do iterative improvements.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
