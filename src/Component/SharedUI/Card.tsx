import React from "react";
import { IBlog } from "../../dummyData/newsBlogs";

interface IProps {
  data: IBlog;
}

const CardComponent: React.FC<IProps> = ({ data }) => {
  return (
    <button className="w-full min-h-full text-left flex flex-col justify-between">
      <img
        src={data.Image}
        alt="blog image"
        className="h-[240px] w-[100%] object-fill"
      />
      <div className="pt-3">
        <div className="flex gap-2">
          <span className="text-primary font-bold capitalize">
            {data.category}
          </span>
          <span className="text-secondary">{data.date}</span>
        </div>
        <h3 className="text-[18px] text-black py-2">{data.title}</h3>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-2 items-center pt-[20px]">
          <img
            src={data.userImage}
            alt="user"
            className="h-[32px] w-[32px] rounded-full"
          />
          <span className="capitalize">{data.userName}</span>
        </div>
      </div>
    </button>
  );
};

export default CardComponent;
