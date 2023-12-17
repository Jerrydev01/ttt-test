import ButtonComponent from "../SharedUI/Button";

interface IProps {
  naveMenu;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
}
const MobileNav = ({ naveMenu, setShow, show }: IProps) => {
  return (
    <div className="relative top-20">
      <div className="  right-0 bg-white py-10  w-full fixed h-screen z-40 overflow-clip">
        <ul className="flex-col gap-6 justify-center items-center w-full  ">
          {naveMenu.map((item) => (
            <li
              onClick={() => setShow(!show)}
              key={item.id}
              className="text-[24px]  font-medium hover:opacity-90 py-5 text-center"
            >
              <a href={item.path} className="text-primary font-semibold">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex w-full justify-center ">
          <ButtonComponent
            handleSubmit={() => {
              setShow(!show);
            }}
            className="hover:bg-primary hover:text-white rounded-full border-2 border-primary text-primary  "
          >
            Log In
          </ButtonComponent>
        </div>
      </div>
      <div
        onClick={() => setShow(!show)}
        className="bg-black/50 fixed top-0 left-0 right-0  w-screen h-screen"
      />
    </div>
  );
};

export default MobileNav;
