import logo from "../assets/Boldo.svg";

export interface IFooterTwo {
  id: string;
  mainTitle: string;
  subtitle: {
    id: string;
    title: string;
    link: string;
  }[];
}

export interface IFooterOne {
  Image: string;
  description: string;
  copyright: string;
}

export const footerOne: IFooterOne = {
  Image: logo,
  description:
    "Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.",
  copyright: "All rights reserved.",
};

export const footerTwo: IFooterTwo[] = [
  {
    id: "1",
    mainTitle: "Landings",
    subtitle: [
      {
        id: "1",
        title: "Home",
        link: "#",
      },
      {
        id: "2",
        title: "Products",
        link: "#",
      },
      {
        id: "3",
        title: "Services",
        link: "#",
      },
    ],
  },
  {
    id: "2",
    mainTitle: "Company",
    subtitle: [
      {
        id: "1",
        title: "Home",
        link: "#",
      },
      {
        id: "2",
        title: "Careers",
        link: "#",
      },
      {
        id: "3",
        title: "Services",
        link: "#",
      },
    ],
  },
  {
    id: "3",
    mainTitle: "Resources",
    subtitle: [
      {
        id: "1",
        title: "Blog",
        link: "#",
      },
      {
        id: "2",
        title: "Products",
        link: "#",
      },
      {
        id: "3",
        title: "Services",
        link: "#",
      },
    ],
  },
];
