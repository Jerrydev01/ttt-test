import { IBlog, newsBlogs } from "../../dummyData/newsBlogs";
import { useWindowSize } from "../../hooks/windowSize";
import ButtonComponent from "../SharedUI/Button";
import CardComponent from "../SharedUI/Card";

const LatestBlog = () => {
  const windowSize = useWindowSize();

  const small = newsBlogs.slice(0, 4);

  const showByScreen = windowSize.width < 900 ? small : newsBlogs;
  return (
    <>
      <h3 className="text-[30px] lg:text-[48px] pb-[40px] px-[30px] lg:px-[100px]">
        Latest news
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] px-[30px] lg:px-[100px] items-center justify-center w-full">
        {showByScreen.map((blog: IBlog) => {
          return <CardComponent key={blog.id} data={blog} />;
        })}
      </div>
      <div className="w-full flex justify-center mt-[80px]">
        <ButtonComponent
          className="hover:bg-primary hover:text-white rounded-full border-2 border-primary text-primary py-3"
          handleSubmit={(e) => {
            e.preventDefault();
          }}
        >
          Load more
        </ButtonComponent>
      </div>
    </>
  );
};

export default LatestBlog;
