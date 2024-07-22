import {
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  telegram,
  twitter,
} from "../assets";

import mail from '../assets/socials/mail.svg';

import busyman from '../assets/partners/busyman.png';
import dopamine from '../assets/partners/dopamine.png';
import moonhill from '../assets/partners/moonhill.png';
import strv from '../assets/partners/strv.svg';
import wood from '../assets/partners/wood.svg';
import nocenix from '../assets/notification/nocenix.png';
import louskac from '../assets/notification/Louskac.png';
import ai from '../assets/notification/AI.png';

import jakubL from '../assets/Team/JakubL.jpg';
import jakubH from '../assets/Team/JakubH.jpg';
import roman from '../assets/Team/Roman.jpg';
import ondra from '../assets/Team/Ondra.jpg';
import jan from '../assets/Team/Jan.jpg';
import jakubS from '../assets/Team/JakubS.jpg';
import lukas from '../assets/Team/Lukas.jpg';
import tomas from '../assets/Team/Tomas.jpg';
import martin from '../assets/Team/Martin.jpg';
import greta from '../assets/Team/Greta.jpg';

import roadmap5 from '../assets/roadmap/image-5.png';
import roadmap6 from '../assets/roadmap/image-6.png';
import roadmap7 from '../assets/token.png';
import roadmap8 from '../assets/roadmap/image-8.png';
import roadmap9 from '../assets/roadmap/image-9.png';
import roadmap10 from '../assets/roadmap/image-10.png';
import roadmap11 from '../assets/roadmap/image-11.png';
import roadmap12 from '../assets/roadmap/image-12.png';
import roadmap13 from '../assets/roadmap/image-7.png';

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#services",
  },
  {
    id: "1",
    title: "Utility",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "3",
    title: "Team",
    url: "#features",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [nocenix, louskac, ai];

export const companyLogos = [busyman, dopamine];

export const brainwaveServices = [
  "Getting paid in Nocenix token",
  "Can raise bigger funds for bigger challenges",
  "Best inspiration for new content",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
];

export const roadmap = [
  {
    id: "0",
    title: "Initial idea",
    text: "The initial idea came out in 2019. The founder as an owner of a social media marketing agency, saw first-hand the decline of user's interest in common advertising so he decided to focus on collaboration with influencers. He worked closely enough with them to see their struggle with making money on traditional social media. Then he also saw businesses looking for effective and measurable ways to advertise on social media. All three groups (users, influencers and businesses) had the same issue - making money on social media. So he went ahead to address this problem with this complex app."
    .replace(
      /\b(struggle with making money)\b/g,
      '<span class="pink">$1</span>'
    ),
    date: "Q3 2018",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "MVP created",
    text: "We created OuKee app that was based on the initial idea. The idea of close collaboration with influencers helped us raise initial capital. As a go-to market strategy we chose TV show Likehouse that we helped create with national television in the Czech Republic."
    .replace(
      /\b(raise initial capital)\b/g,
      '<span class="pink">$1</span>'
    ),
    date: "Q2 2019",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Go to market and TV show Likehouse",
    text: "The TV show and the app were success. More than 40 Influencers were onboarded. We gained data that helped us polish our initial idea, unfortunately there was conflict of interest and our investor - television decided that we have to redesign our app to be voting app for the TV Show. 100 00 downloads of our MVP in only 4 days"
    .replace(
      /\b(100 00 downloads of our MVP in only 4 days)\b/g,
      '<span class="pink">$1</span>'
    ),
    date: "Q2 2021",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Creation of Nocena",
    text: "After the end of the TV show we started analyzing data and continue with market research. That helped us to create Nocena. The application that addresses all these issues each target group has with current social media apps. But there was still one missing piece."
    .replace(
      /\b(Nocena)\b/g,
      '<span class="pink">$1</span>'
    ),
    date: "Q4 2021",
    status: "done",
    imageUrl: roadmap4,
    colorful: true,
  },
  {
    id: "4",
    title: "Partnership with Apollo Ventures",
    text: "We presented our start up to angel investors and attracted Apollo Ventures that helped us with the idea of blockchain integration. In-app money based on blockchain technology helped us to solve all the issues we faced with a fair and transparent business model."
    .replace(
      /\b(based on blockchain technology)\b/g,
      '<span class="pink">$1</span>'
    ),
    date: "Q3 2022",
    status: "done",
    imageUrl: roadmap5,
    colorful: true,
  },
  {
    id: "5",
    title: "Iteration of MVP based on user feedback",
    text: "Based on the feedback we have recived we got to work and created a better version of the app. We added daily challenges to keep users engaged and got rid of the voting features from the TV show. Main improvement was that Apollo Ventures team members became co-founders of the project, helped us create sustainable tokenomics and cover expertise from the crypto world that we needed."
    .replace(
      /\b(sustainable tokenomics)\b/g,
      '<span class="pink">$1</span>'
    ),
    date: "Q2 2023",
    status: "done",
    imageUrl: roadmap13,
  },
  {
    id: "6",
    title: "Pre-seed",
    text: "In pre-seed our goal is to validate our ideas with early investors and raise initial capital that will be used mainly to support sales and marketing activities in the seed round."
    .replace(
      /\b(support sales and marketing)\b/g,
      '<span class="pink">$1</span>'
    ),
    date: "Q2 2024",
    status: "ongoing",
    imageUrl: roadmap8,
  },
  {
    id: "7",
    title: "Seed",
    text: "During seed round we will be raising initial capital for next phases and iterate our project in cooperation with other experienced investors and funds. Our goal is to find smart money that will help us move our project further. By choosing the right investors we will attract more capital in the following rounds."
    .replace(
      /\b(smart money)\b/g,
      '<span class="pink">$1</span>'
    ),
    date: "Q3 2024",
    status: "ongoing",
    imageUrl: roadmap9,
    colorful: true,
  },
  {
    id: "8",
    title: "Private sale",
    text: "During all phases we will be building our social media presence and thanks to deals from the seed round we will be able to invest in a broader marketing campaign and collaboration with influencers. We are also part of many crypto-investing communities where our progress will be shared, and private rounds offered."
    .replace(
      /\b(broader marketing campaign)\b/g,
      '<span class="pink">$1</span>'
    ),
    date: "Q4 2024",
    status: "ongoing",
    imageUrl: roadmap10,
    colorful: true,
  },
  {
    id: "9",
    title: "Public sale",
    text: "The next step is Public launch. At that point we will have interesting names of VC's from the Seed Round, many influencers on board and deep reach on social media thanks to deals from private sale. In this round our goal is to attract new investors and create a demand for the Nocenix token via launchpads on centralized and decentralized exchanges. Public launch will be also accessible via our website and promotional links for influencers will be created to attract new investors and increase demand and liquidity."
    .replace(
      /\b(Nocenix token)\b/g,
      '<span class="pink">$1</span>'
    ),
    date: "Q1 2025",
    status: "ongoing",
    imageUrl: roadmap11,
  },
  {
    id: "10",
    title: "Token launch ",
    text: "The goal of this phase is to be ready for the seed round and negotiation with VC's. During this phase we are preparing all the plans and materials. Building the team and building our presence on social media. Our main focus will be on X (ex. Twitter), Telegram and Discord. During the preparation phase we will continuously iterate our project to be prepared for all ongoing phases. We will cooperate with VC funds that we already know and discuss our project with investors and crypto influencers with whom we already have a relationship."
    .replace(
      /\b(continuously iterate)\b/g,
      '<span class="pink">$1</span>'
    ),
    date: "Q1 2025",
    status: "ongoing",
    imageUrl: roadmap7,
  },
  {
    id: "11",
    title: "Vision for the future",
    text: "Once the initial app is up and runnning we will enter the futuristic phase, getting our app ready for the next step. One of the visons is to integrate our app with smart headsets like Apple Vision Pro. This will be very useful for live streaming and general move towards the “metaverse”. Our platform is being built for this future. Users will be able to stream as they are moving through the city with real-time challenges popping up from their audience. Watch the movie Ready Player One or Nerve, just don't get scared ;)"
    .replace(
      /\b(metaverse)\b/g,
      '<span class="pink">$1</span>'
    ),
    date: "Q2 2025",
    status: "ongoing",
    imageUrl: roadmap12,
    colorful: true,
  }
];

export const collabText =
  "With every challenge that the user completes the network learns more about their behavior and adpats to their personal needs";


export const collabContent = [
  {
    id: "0",
    title: "Vertical database",
  },
  {
    id: "1",
    title: "AI powered generation",
  },
  {
    id: "2",
    title: "Solana blockchain",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "B2C",
    description: "We take a small cut from each transaction that takes place on the network. This cut is partly redistributed into the community and partly burned to boost the token price."
    .replace(
      /\b(redistributed into the community)\b/g,
      '<span class="pink">$1</span>'
    ),
    price: null,
    features: [
      "It provides deflationary mechanism for the token",
      "Smaller cut than other alternatives",
      "No pay wall - users earn the token through challenges",
    ],
  },
  {
    id: "1",
    title: "B2B",
    description: "Revolution in online and influencer marketing. On other networks companies pay for boring ads that users hate. On Nocena companies set up public challenges for anyone to complete. This brings customers to the place where companies want them - like their stores."
    .replace(
      /\b(boring ads that users hate)\b/g,
      '<span class="pink">$1</span>'
    ),
    price: null,
    features: [
      "Brand new way to engage users with the products",
      "Drive people to physical stores",
      "Effective and measurable marketing investment",
    ],
  },
  {
    id: "2",
    title: "Verification",
    description: "Unlike in other apps, the verification badge here offers more than just a status symbol. It provides users with substantial benefits. It allows them to create public challenges themselves and enables influencers to raise funds for their content. "
    .replace(
      /\b(substantial benefits)\b/g,
      '<span class="pink">$1</span>'
    ),
    price: null,
    features: [
      "Gives users advantages like creating public challenges and fund raising ",
      "Increases token demand, the verification is paid via Nocenix ",
      "Priority support and help",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Jakub Lustyk",
    text: "Jakub is the founder with deep knowledge of social media. At the age of 19 he founded a social media marketing agency, then raised capital for project OuKee which was a combination of social media app and TV show. Based on that experience he came up with NOCENA and now is responsible for the project."
    .replace(
      /\b(OuKee)\b/g,
      '<span class="pink">$1</span>'
    ),
    backgroundUrl: "1",
    imageUrl: jakubL,
    position: "CEO",
  },
  {
    id: "1",
    title: "Roman Panuška",
    text: "Roman is an experienced crypto investor with deep fundamental knowledge of the market. He is cofounder of Apollo Ventures and has built one of the biggest crypto communities in the Czech Republic. As an advisor he has participated in token launch many times before and he is responsible for the Nocenix token launch."
    .replace(
      /\b(biggest crypto communities)\b/g,
      '<span class="pink">$1</span>'
    ),
    backgroundUrl: "3",
    position: "CTO",
    imageUrl: roman,
  },
  {
    id: "2",
    title: "Ondřej Chadima",
    text: "Ondrej is senior programmer with 8 years of experience, full stack developer, system architect, lately working on projects like Jobs.cz and internet banking app for ČSOB bank. He is also an AI developer with strong vertical database experience. He is responsible for Nocena app development."
    .replace(
      /\b(system architect)\b/g,
      '<span class="pink">$1</span>'
    ),
    backgroundUrl: "4",
    position: "CIO",
    imageUrl: ondra,
    light: true,
  },
  {
    id: "3",
    title: "Jan Valečka",
    text: "Jan is crypto influencer, youtuber and co-founder of a crypto community. He managed campaigns for some of the biggest brands in the Czech republic. He is responsible for social media marketing for Nocena app and Nocenix token."
    .replace(
      /\b(crypto influencer)\b/g,
      '<span class="pink">$1</span>'
    ),
    backgroundUrl: "5",
    position: "Social media manager",
    imageUrl: jan,
  },
  {
    id: "4",
    title: "Jakub Šimandl",
    text: "Jakub co-created the visual identity of previous project Oukee and now Nocena brand. His last project Milionchvilek became biggest civil organization in the Czech Republic. Jakub makes sure that Nocena brand will be well known."
    .replace(
      /\b(visual identity)\b/g,
      '<span class="pink">$1</span>'
    ),
    backgroundUrl: "6",
    position: "Brand manager",
    imageUrl: jakubS,
  },
  {
    id: "5",
    title: "Lukáš Krofta",
    text: "Lukáš is responsible for our community growth and management. These communities are mainly on X (Twitter),  Telegram and later on Discord."
    .replace(
      /\b(community growth)\b/g,
      '<span class="pink">$1</span>'
    ),
    backgroundUrl: "1",
    position: "Community manager",
    imageUrl: lukas,
  },
  {
    id: "6",
    title: "Tomáš Pacalt",
    text: "Tomáš is experienced trader with a deep knowledge of the market mechanism. He is also co-founder of Apollo Ventures. Tomáš actively advises teams in area of tokenomics, market making etc."
    .replace(
      /\b(area of tokenomics)\b/g,
      '<span class="pink">$1</span>'
    ),
    backgroundUrl: "2",
    position: "Crypto advisor",
    imageUrl: tomas,
    light: true,
  },
  {
    id: "7",
    title: "Martin Kůra",
    text: "Martin has a deep knowledge of the crypto market and tokenomics. He has researched many crypto projects and he helps us to meet the highest standard in terms of technology, utility and security.  "
    .replace(
      /\b(terms of technology)\b/g,
      '<span class="pink">$1</span>'
    ),
    backgroundUrl: "3",
    position: "Crypto advisor",
    imageUrl: martin,
  },
  {
    id: "8",
    title: "Greta Božkova",
    text: "Greta plays a pivotal role in shaping and establishing the project's identity. She has a valuable skillset in event organization, social media management and community management. She fosters a well-coordinated team environment and professional development."
    .replace(
      /\b(establishing the project's identity)\b/g,
      '<span class="pink">$1</span>'
    ),
    backgroundUrl: "4",
    position: "Community manager",
    imageUrl: greta,
    light: true,
  },
  {
    id: "9",
    title: "Jakub Helešic",
    text: "He is an innovation-oriented entrepreneur. He successfully exited two IT startups in management and healthcare. After four fold growth he sold his equity in cyber security company and co-founded crypto hedge fund Apollo Ventures, now transforming it into fully regulated fund Dopamine Investments."
    .replace(
      /\b(exited two IT startups)\b/g,
      '<span class="pink">$1</span>'
    ),
    backgroundUrl: "2",
    position: "Business advisor",
    imageUrl: jakubH,
    light: true,
  },
];

export const socials = [
  /*{
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  */
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/NocenaApp",
  },
  /*
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  */
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://t.me/+Iqyyecaj8Pk2YjI0",
  },
  /*
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
  */
  {
    id: "5",
    title: "Mail",
    iconUrl: mail,
    url: "mailto:letmein@nocena.com",
  }
];
