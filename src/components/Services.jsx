import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoChatMessage,
} from "./design/Services";

const Services = () => {
  return (
    <Section id="services">
      <div className="container">
        <Heading
          title="Social network made for creators"
          text="No ads and profit to those who deserve it"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[45rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right opacity-30 lg:opacity-100"
                width={800}
                alt="drifting car"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[26rem] ml-auto">
              <h4 className="h4 mb-4">Influencers</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                <span class="blue">Use case</span>: Users have challenged their favourite influencer to show off his new Mustang by taking it out and drifting in a scenic spot. Normally, the <span class="pink">influencer would be hesitant</span> to accept a challenge like this as he would have to spend significant money on completing it (he would ruin his new tires and need to hire a specialized team to produce a high-quality video along with modern drone shots). However, thanks to Nocena, he will be able to calculate the cost and raise the necessary funds from his followers.
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[45rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="influencer being challenged"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Users</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  <span class="blue">Use case</span>: The user challenges the influencer to do more pushups than them and offers a reward. <span class="pink">Both of them are winning</span>. The influencer receives the reward and the user increases their presence on social media and interacts directly with their favorite influencer. This way they can even be seen in all time leaderboards as the #1 fan.
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Businesses</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  <span class="blue">Use case</span>: An electric scooter rental company in Prague challenges users to see if an electric scooter can go through traffic faster than a car. They pay for each completed challenge while it <span class="pink">brings them real business</span>. Another example is a clothing brand challenging users to take a picture of the craziest outfit they can find in their store.
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Map of public challenges"
                />

                <VideoChatMessage />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
