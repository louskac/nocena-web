import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import logo from "../../assets/token.png";
import { navigation } from "../../constants";
import Button from "../Button";
import MenuSvg from "../../assets/svg/MenuSvg";
import { HamburgerMenu } from "../design/Header";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[8rem] xl:mr-8 mt-6 mb-2" href="#hero">
          <img src={logo} width={190} height={40} alt="Logo" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[10rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
            {/* Buttons for mobile */}
            <Button
              className="lg:hidden my-4"
              onClick={async () => {
                const { default: whitepaperUrl } = await import("../../assets/documents/whitepaper.pdf");
                window.open(whitepaperUrl, '_blank');
              }}
              white
            >
              Whitepaper
            </Button>
            <Button
              className="lg:hidden my-4"
              onClick={async () => {
                const { default: whitepaperUrl } = await import("../../assets/documents/pitch.pdf");
                window.open(whitepaperUrl, '_blank');
              }}
            >
              Pitchdeck
            </Button>
          </div>
          <HamburgerMenu />
        </nav>
        {/* Buttons for larger screens */}
        <div className="hidden lg:flex">
          <Button
            className="mr-10"
            onClick={async () => {
              const { default: whitepaperUrl } = await import("../../assets/documents/whitepaper.pdf");
              window.open(whitepaperUrl, '_blank');
            }}
            white
          >
            Whitepaper
          </Button>
          <Button
            onClick={async () => {
              const { default: whitepaperUrl } = await import("../../assets/documents/pitch.pdf");
              window.open(whitepaperUrl, '_blank');
            }}
          >
            Pitchdeck
          </Button>
        </div>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
