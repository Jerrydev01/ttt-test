interface IProps {
  naveMenu;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  show: boolean;
}
const MobileNav = ({ naveMenu, setShow, show }: IProps) => {
  return (
    <div className="relative top-20">
      <div className="  right-0 bg-white py-10 px-20 w-[30vh] sm:w-[40vh] fixed h-screen z-40 ">
        <ul className="flex-col gap-6  ">
          {naveMenu.map((item) => (
            <li
              onClick={() => setShow(!show)}
              key={item.id}
              className="text-[24px]  font-medium hover:opacity-90 py-5"
            >
              <a href={item.path} className="text-primary font-semibold">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={() => setShow(!show)}
        className="bg-black/50 fixed top-0 left-0 right-0  w-screen h-screen"
      />
    </div>
  );
};

export default MobileNav;
