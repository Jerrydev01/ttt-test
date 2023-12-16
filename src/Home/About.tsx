import LatestBlog from "../Component/About/LatestBlog";
import imgBlog from "../assets/img1.png";
import user from "../assets/news2.png";

const About = () => {
  return (
    <div className="h-full pt-[150px]">
      <div className="text-center pb-5 ">
        <h4 className="md:text-[18px] lg:text-[20px] text-primary">Blog</h4>
        <h3 className="text-[48px] lg:text-[64px] text-primary">
          Thoughts and words
        </h3>
      </div>
      {/* favorite blog content */}
      <div className="w-full lg:flex gap-[100px] items-center py-[30px] lg:py-[60px] border-b-2 border-secondary">
        <img
          src={imgBlog}
          alt="blog image"
          className="h-[250px] md:h-[450px] w-full lg:w-[90%] aspect-square object-fill"
        />

        <div className="w-[100%] pt-4 lg:pt-0">
          <div className="flex gap-2">
            <span className="text-primary font-bold">Category</span>
            <span className="text-secondary">November 22, 2021</span>
          </div>
          <h3 className="text-[24px] lg:text-[48px] text-black py-2">
            Pitch term sheet backing validation focus release.
          </h3>
          <div className="flex gap-2 items-center pt-[20px]">
            <img
              src={user}
              alt="user"
              className="h-[32px] w-[32px] rounded-full"
            />
            <span className="">Chandler Bing</span>
          </div>
        </div>
        {/*  favorite blog content end */}
      </div>
      {/* latest blog content*/}
      <div className="pt-[50px]">
        <LatestBlog />
      </div>
      {/* latest blog content end*/}
    </div>
  );
};

export default About;
