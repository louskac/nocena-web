import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import Section from '../Section'; // Ensure this path is correct

import { BackgroundCircles, BottomLine, Gradient } from "../design/Hero";
import robot from "../../assets/background.jpg"; // Ensure this path is correct
import { ScrollParallax } from "react-just-parallax";
import Generating from "../Generating";
import Notification from "../Notification";
import LouskacImage from "../../assets/notification/Louskac.png";
import AIImage from "../../assets/notification/AI.png";

import button0 from "../../assets/buttons/0.png";
import button1 from "../../assets/buttons/1.png";
import button2 from "../../assets/buttons/2.png";
import button3 from "../../assets/buttons/3.png";
import button4 from "../../assets/buttons/4.jpg";

const getButtonInfo = (buttonIndex) => {
  switch (buttonIndex) {
    case 0:
      return {
        tagline: "Nocenix mining",
        headline: "Daily challenge",
        example: "Take a picture with a yellow car",
        text: (
          <>
            The daily challenge is created inside the app using our unique AI solution. Users must upload a photo of themselves in a situation defined by the challenge.
            <br /><br />
            For example, take a picture of yourself with a bottle of Coca-Cola.
            If the user doesn't fulfill the challenge, they won't be able to see pictures of their friends' daily challenges.
            Daily challenges will be seen only among friends. To motivate users further, there will also be <span className="pink">rewards in Nocenix tokens</span> at the beginning.
            This daily activity helps to build a habit of using the app every day.
          </>
        )
      };
    case 1:
      return {
        tagline: "Companies input",
        headline: "Public challenges",
        example: "Eat the super spicy wings menu in under 15 minutes",
        text: (
          <>
            Another way users will be able to complete challenges is through a map of public challenges. On this map users can set up cool spots in their neighborhood for other users to compete in.
            <br /><br />
            Here <span className="pink">their own stores</span> will be possible!
          </>
        )
      };
    case 2:
      return {
        tagline: "Money transfer",
        headline: "Private challenges",
        example: "Try walking on highline",
        text: (
          <>
            Users give each other challenges on the app and they send each other our token. The challenges can also be long term - like a fitness challenge to do 100 pushups each day for a month.
            <br /><br />
            This is the <span className="pink">main feature of the app</span> and the main usage of our token.
            <br /><br />
            Challenges don’t have to be just fun and fitness, food influencers can be challenged to cook a specific meal and give the recipe to their users. Or a travel influencer can show how to travel cheaply around the world like this.
          </>
        )
      };
    case 3:
      return {
        tagline: "Unique influencer model",
        headline: "Live challenges",
        example: "Hop on that bus you see and ride it to the last station",
        text: (
          <>
            This is our truly innovative feature that has been developed based on the specific needs of real influencers that were unhappy with the TikTok live streaming feature. Firstly, TikTok is cutting the reward by 50% on each transaction. Secondly, the livestream is not interactive at all so basically the only incentive is that users will get their name read by the influencer and will be publicly thanked.
            <br /><br />
            On our platform the viewers can challenge the streamer to do a specific challenge. Then they vote together if the challenge was completed or not. Also we bring many innovative features like “stream battle” where two streamers can connect their livestreams and compete in challenges together, or make their viewers compete in activity with the other group.
            <br /><br />
            This feature is mostly important for the B2B business model, because this way businesses can set up challenges in <span className="pink">even shopping</span> will be possible!
          </>
        )
      };
    case 4:
      return {
        tagline: "Large token raising",
        headline: "Raising funds for the stunts",
        example: "Drifting challenge - because it is expensive for influencer to complete it, they will want to raise funds for it",
        text: (
          <>
            Thanks to this feature everybody can become a famous influencer. All it takes is just one good idea. It also allows influencers to test their ideas before they invest in their stunts and find out they didn't bring them enough attention and income as they hoped for.
            <br /><br />
            Verified users are allowed to create challenges and ask users to fund them via the Nocenix token. This is the first crowd funding for influencers. 
            <br /><br />
            Case study: Adam loves drifting, and his followers love watching it! But Adam doesn't want to destroy his tires without knowing that the video will attract enough attention and revenue <span className="pink">to cover his costs</span>. With this feature, he can ask his followers to fund his stunt. Once he hits the fundraising target, the tokens will be locked until he performs. Then, after the challenge is completed, the tokens will be released to Adams's wallet.
          </>
        )
      };
    default:
      return {
        tagline: "Nocenix mining",
        headline: "Daily challenge",
        example: "Take a picture with a yellow car",
        text: (
          <>
            The daily challenge is created inside the app using our unique AI solution. Users must upload a photo of themselves in a situation defined by the challenge.
            <br /><br />
            For example, take a picture of yourself with a bottle of Coca-Cola.
            If the user doesn't fulfill the challenge, they won't be able to see pictures of their friends' daily challenges.
            Daily challenges will be seen only among friends. To motivate users further, there will also be <span className="pink">rewards in Nocenix tokens</span> at the beginning.
            This daily activity helps to build a habit of using the app every day.
          </>
        )
      };
  }
};

const Graph = () => {
  const [loading, setLoading] = useState(true);
  const [spline, setSpline] = useState(null);
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (variable) => {
    if (spline) {
      console.log(`Button ${variable} clicked`);
      // Reset all variables to 0
      for (let i = 0; i < 5; i++) {
        spline.setVariable(i.toString(), 0);
      }
      // Set the clicked variable to 100
      spline.setVariable(variable.toString(), 100);
    }
    setActiveButton(variable);
  };

  const buttonImages = [button0, button1, button2, button3, button4];
  const { headline, example, text } = getButtonInfo(activeButton);
  const taglines = buttonImages.map((_, index) => getButtonInfo(index).tagline);

  return (
    <Section className="flex flex-col items-center justify-between w-full h-screen justify-center mb-96" id="graph-section">
      <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
        <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
          <div className="relative bg-n-8 rounded-[1rem]">
            <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

            <div className="aspect-[33/40] mx-auto rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
              <img
                src={robot}
                className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                width={1024}
                height={490}
                alt="AI"
              />
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
        <BackgroundCircles />
        <h1 className="text-4xl lg:text-5xl my-8 z-10 text-center">How we provide token utility</h1>
        <div className="flex flex-row items-center justify-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <button
              key={index}
              className="relative mb-4 px-6 py-3 text-lg font-semibold mx-6 my-6"
              onClick={() => handleButtonClick(index)}
            >
              <div className="relative w-40 h-40">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <img
                    src={buttonImages[index]}
                    alt={taglines[index]}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0A141D] opacity-50"></div>
                </div>
                <div className="absolute top-0 left-0 right-0 bottom-0 border-2 border-white rounded-full"></div>
                <div className="absolute top-[-7px] left-0 right-0 bottom-[7px] border-2 border-[#FD4EF5] rounded-full"></div>
                <div className="absolute top-[7px] left-0 right-0 bottom-[-7px] border-2 border-[#10CAFF] rounded-full"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-xl p-8">
                  {taglines[index]}
                </div>
              </div>
            </button>
          ))}
        </div>
        <h1 className="mt-6 text-4xl mb-6">{headline}</h1>
        <p>{text}</p><br />
        <p className='blue italic'>Example: {example}</p>
      </div>
      <div className="relative flex-1 p-8 h-full"></div>
      <BottomLine />
    </Section>
  );
};

export default Graph;
