import { useState } from "react";
import bgimg from "../../assets/bgimage.png";
import { IFooterTwo, footerOne, footerTwo } from "../../dummyData/footerdata";
import ButtonComponent from "../SharedUI/Button";
import TextInput from "../SharedUI/TextInput";

const cardStyle: React.CSSProperties = {
  position: "relative", // To enable positioning of the image and background color
  backgroundColor: "#0A2640", // Set the blue background color

  // Use background image for the top-right corner
  backgroundImage: `url(${bgimg})`, // Replace data.Image with your image URL
  backgroundSize: "cover", // Adjust the background image size
  backgroundRepeat: "no-repeat", // Ensure the background image doesn't repeat
  backgroundPosition: "top right", // Position the background image at the top-right corner
};

const Footer = () => {
  const [value, setValue] = useState("");

  // handle submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
    alert(value);
  };
  return (
    <div className="px-[30px] lg:px-[100px] pb-[100px]">
      {/* newsletter section */}
      <div
        style={cardStyle}
        className="w-full mt-[80px] lg:mt-[124px] background py-[74px] rounded-[12px]"
      >
        <div className="w-[100%] flex flex-col items-center gap-5">
          <h3 className="text-[20px] md:text-[30px] lg:text-[48px]  text-white text-center w-[85%] md:w-[70%] lg:w-[55%] ">
            An enterprise template to ramp up your company website
          </h3>
        </div>
        <div className="w-[100%]  md:flex justify-center gap-5 items-center pt-[50px]">
          <div className="w-[75%] md:w-[40%]  lg:w-[25%] mx-auto md:mx-0">
            <TextInput
              InputType="email"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Your email address"
              className="rounded-full py-3 px-5"
            />
          </div>
          <div className="mx-auto md:mx-0 flex md:block justify-center pt-4 md:pt-0">
            <ButtonComponent
              className=" text-[#0A2640] rounded-full border-2 border-[#65E4A3] py-3 bg-[#65E4A3] hover:opacity-70 w-[75%] md:w-full"
              handleSubmit={(e) => handleSubmit(e)}
            >
              Start now
            </ButtonComponent>
          </div>
        </div>
      </div>
      {/* footer links */}
      <div className="md:mt-[50px]">
        <div className="pt-[100px]">
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[50px] lg:gap-[100px]">
            <div className="w-full col-span-2">
              <img
                src={footerOne.Image}
                alt="logo"
                className="w-[156px] h-[42px]"
              />
              <p className="text-secondary pt-[40px] pb-[64px] leading-7 md:w-[80%]">
                {footerOne.description}
              </p>
              <p className="text-secondary">{footerOne.copyright}</p>
            </div>
            {footerTwo.map((item: IFooterTwo) => {
              return (
                <div key={item.id} className="">
                  <h4 className="font-bold text-[20px]">{item.mainTitle}</h4>
                  <div className="pt-[40px]">
                    {item.subtitle.map(
                      (sub: { id: string; title: string; link: string }) => {
                        return (
                          <div key={sub.id} className="py-[20px]">
                            <a
                              href={sub.link}
                              className="text-secondary hover:text-primary"
                            >
                              {sub.title}{" "}
                              {sub.title.toLocaleLowerCase() === "careers" ? (
                                <span className="py-1 px-2 text-[13px] text-primary bg-[#65E4A3] rounded-full font-bold">
                                  Hiring!
                                </span>
                              ) : null}
                            </a>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
