import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import LouskacImage from "../assets/notification/Louskac.png";
import AIImage from "../assets/notification/AI.png";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
        <h1
          className="relative text-4xl lg:text-5xl mb-8 z-10"
          data-text="Your content, your profit"
        >
          Your content, your profit
        </h1>
          <p className="body-1 max-w-4xl mx-auto mb-6 text-n-2 lg:mb-8">
            Creators are the backbone of social media.<br />
            Yet the reality is that they get very little reward for their work.<br />
            {" "}
              <span className="relative">
              Nocena{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
            is here to change the game.
          </p>

        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -left-[5.5rem] bottom-[7.5rem] w-[18rem] xl:flex"
                    title="Ice bucket challenge!"
                    imageUrl={AIImage}
                    textValue="800"
                  />
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Rap using acoustic guitar!"
                    imageUrl={LouskacImage}
                    textValue="1200"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
//L: <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />