import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Header />
      <div className=" px-[30px] lg:px-[100px]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
