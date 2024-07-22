import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";

import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import teamPhoto from '../assets/Team/team.jpg';

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Team working on this app"
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(../src/assets/benefits/card-${item.backgroundUrl}.svg)`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 blue">{item.position}</p>
                <p className="body-2 mb-6 text-n-3"><div dangerouslySetInnerHTML={{__html: item.text}}></div></p>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-10 transition-opacity hover:opacity-30 lg:opacity-0">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
        <img
          src={teamPhoto}
          width={380}
          height={362}
          alt="Full team photo"
          className="w-full h-full object-cover lg:pl-64 lg:pr-64 lg:mb-20"
        />

      </div>
    </Section>
  );
};

export default Benefits;
