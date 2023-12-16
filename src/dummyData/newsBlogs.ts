import news from "../assets/news1.png";
import news2 from "../assets/news2.png";
import news3 from "../assets/news3.png";
import news4 from "../assets/news4.png";
import news5 from "../assets/news5.png";
import news6 from "../assets/news6.png";

import user1 from "../assets/user/user1.png";
import user2 from "../assets/user/user2.png";
import user3 from "../assets/user/user3.png";

export interface IBlog {
  id: number;
  Image: string;
  title: string;
  userName: string;
  userImage: string;
  category: string;
  date: string;
}
export const newsBlogs: IBlog[] = [
  {
    id: 1,
    Image: news,
    title: "Pitch termsheet backing validation focus release.",
    userName: "Chandler Bing",
    userImage: user1,
    category: "category",
    date: "November 22, 2022",
  },
  {
    id: 2,
    Image: news2,
    title:
      "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    userName: "Zeus Bing",
    userImage: user2,
    category: "politics",
    date: "December 2, 2023",
  },
  {
    id: 3,
    Image: news3,
    title:
      "Beta prototype sales iPad gen-z marketing network effects value proposition",
    userName: "Atlas Bing",
    userImage: user3,
    category: "category",
    date: "November 22, 2022",
  },
  {
    id: 4,
    Image: news4,
    title: "Pitch termsheet backing validation focus release.",
    userName: "Chandler Bing",
    userImage: user1,
    category: "category",
    date: "November 22, 2022",
  },
  {
    id: 5,
    Image: news5,
    title:
      "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    userName: "Zeus Bing",
    userImage: user2,
    category: "politics",
    date: "December 2, 2023",
  },
  {
    id: 6,
    Image: news6,
    title:
      "Beta prototype sales iPad gen-z marketing network effects value proposition",
    userName: "Atlas Bing",
    userImage: user3,
    category: "category",
    date: "November 22, 2022",
  },
];
