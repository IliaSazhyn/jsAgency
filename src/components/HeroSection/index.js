import React, { useState, useEffect } from "react";
import Video from "../../videos/video.mp4";

import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroBtnWrapper,
  HeroContent,
  HeroP,
  HeroH1,
  ArrowForward,
  ArrowRight,
  HeroArrowWrapper,
  HeroArrowP,
  ArrowDown
} from "./HeroElements";



const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const [scrollArrow, setScrollArrow] = useState(false);
  const showArrow = () => {
    if (window.scrollY >= 80 && window.scrollY < 500) {
      setScrollArrow(true);
    } else {
      setScrollArrow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', showArrow);
  }, []);

  return (
    <HeroContainer id="home">
      <HeroBg>
      <VideoBg autoPlay loop muted playsinline src={Video} type="video/mp4" />

      </HeroBg>
      <HeroContent>
        <HeroH1>Software Development Company</HeroH1>
        <HeroP>
        We create design and develop solutions for all types of web and mobile products
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            duration={500}
            exact="true"
            offset={-80}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>

        <HeroArrowWrapper scrollArrow={scrollArrow}>
        <HeroArrowP>      
        Scroll down
      </HeroArrowP>
      <ArrowDown/>
        </HeroArrowWrapper>

      </HeroContent>
    </HeroContainer>
    
  );
};

export default HeroSection;
