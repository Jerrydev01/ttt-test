import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import logo from "../../assets/Boldo.svg";
import ButtonComponent from "../SharedUI/Button";
import MobileNav from "./MobileNav";
/**
 * Renders the header component.
 *
 * @return {JSX.Element} The rendered header component.
 */
export interface INavList {
  id: number;
  name: string;
  path: string;
}

const navList: INavList[] = [
  {
    id: 1,
    name: "Product",
    path: "#",
  },
  {
    id: 2,
    name: "Services",
    path: "#",
  },
  {
    id: 3,
    name: "About",
    path: "#",
  },
];

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="">
      <div className="pt-[30px] lg:pt-[50px]  fixed w-full px-[30px] lg:px-[100px] bg-white pb-3 z-[999] shadow-md lg:shadow-none">
        <div className="w-full flex justify-between items-center">
          <a href="#" className="">
            <img
              className="w-[102.218px] md:w-[162.218px] h-[42px]"
              src={logo}
              alt="logo"
            />
          </a>

          <div className="flex items-center gap-8">
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex gap-10 ">
                {navList.map((item) => (
                  <li
                    key={item.id}
                    className="text-[16px] font-medium hover:opacity-90"
                  >
                    <a href={item.path} className="text-primary font-semibold">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <ButtonComponent
                handleSubmit={() => {}}
                className="hover:bg-primary hover:text-white rounded-full border-2 border-primary text-primary "
              >
                Log In
              </ButtonComponent>
            </div>
            <div className="block lg:hidden">
              <button onClick={() => setShow(!show)} className="">
                <Icon
                  icon={show ? "ic:round-close" : "mi:menu"}
                  style={{
                    fontSize: 30,
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {show ? (
        <MobileNav naveMenu={navList} setShow={setShow} show={show} />
      ) : null}
    </div>
  );
};

export default Header;
