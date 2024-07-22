import { Route, Routes } from 'react-router-dom';
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Connect from "./components/Connect.jsx";
import { Analytics } from "@vercel/analytics/react";
import { useState, Suspense, lazy } from 'react';

// Lazy load the Nocenix components
const Nocenix = lazy(() => import("./components/Nocenix/Nocenix"));
const LoadingScreen = lazy(() => import("./components/Nocenix/LoadingScreen"));
const NocenixHeader = lazy(() => import("./components/Nocenix/NocenixHeader"));
const Graph = lazy(() => import("./components/Nocenix/Graph"));

const App = () => {
  const [codeValid, setCodeValid] = useState(false);

  const scrollToGraph = () => {
    document.getElementById('graph-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={
          <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
            <Header />
            <Hero />
            <Services />
            <Collaboration />
            <Pricing />
            <Roadmap />
            <Benefits />
            <Footer />
          </div>
        } />
        <Route path="/nocenix" element={
          <>
            <Suspense fallback={<div>Loading...</div>}>
              {codeValid ? (
                <>
                  <NocenixHeader />
                  <Nocenix scrollToGraph={scrollToGraph} />
                  <Graph />
                  <Footer />
                </>
              ) : (
                <LoadingScreen setCodeValid={setCodeValid} />
              )}
            </Suspense>
          </>
        } />
        <Route path="/connect" element={<Connect />} />
      </Routes>
      <ButtonGradient />
      <Analytics />
    </>
  );
};

export default App;
