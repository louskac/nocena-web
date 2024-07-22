// src/components/Nocenix/Nocenix.jsx
import Spline from '@splinetool/react-spline';
import Button from "../Button";
import { useEffect, useRef } from 'react';

const Nocenix = ({ scrollToGraph }) => {
  const splineRef = useRef(null);

  return (
    <main className="relative flex flex-col h-screen text-white">
      <div className="flex-grow relative mt-36">
        <Spline className="absolute inset-0 w-full h-full" scene={`https://prod.spline.design/beMorOWUSSV30uG1/scene.splinecode?cache-buster=${new Date().getTime()}`} />
      </div>
      <div className="flex flex-col items-center justify-center p-8">
        <h1
          className="text-4xl lg:text-5xl mb-16 z-10 text-center"
          data-text="Platform native token for a proven socialfi app"
        >
          Platform native token for a proven socialfi app
        </h1>
        <p className="mb-4 z-10">Go on and learn more about the ongoing token sale</p>
        <Button
          className="my-4"
          onClick={scrollToGraph}
        >
          Learn more
        </Button>
      </div>
    </main>
  );
};

export default Nocenix;
