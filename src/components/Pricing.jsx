import React from 'react';
import { useNavigate } from 'react-router-dom';
import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import eyes from "../assets/token.png";

const Pricing = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={eyes}
            className="relative z-1 cursor-pointer" // Add cursor-pointer for better UX
            width={255}
            height={255}
            alt="Nocenix token"
            onClick={() => navigate('/nocenix')} // Use navigate to route to /nocenix
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          title="Nocenix token"
          tag="In-app money built on Solana blockchain with real utility and deflationary mechanism"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-md font-code font-bold tracking-wider uppercase border-b"
            href="../assets/documents/whitepaper.pdf"
            download="whitepaper.pdf"
          >
            See full details in the whitepaper
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
