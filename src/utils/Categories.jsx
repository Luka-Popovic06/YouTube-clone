import { AiOutlineJavaScript } from "react-icons/ai";
import { BsStars } from "react-icons/bs";
import { FaPodcast, FaReact } from "react-icons/fa";
import { GrDiamond, GrGamepad } from "react-icons/gr";
import { IoFlameSharp, IoHome, IoMusicalNotes } from "react-icons/io5";
import { MdCastForEducation, MdOutlineSportsBasketball } from "react-icons/md";
import { RiLiveLine } from "react-icons/ri";
import { TbMovie } from "react-icons/tb";
export const categories = [
  {
    name: "New",
    type: "button",
    icon: <IoHome className="link-icon" />,
  },
  {
    name: "Trending",
    type: "button",
    icon: <IoFlameSharp className="link-icon" />,
  },
  {
    name: "JavaScript",
    type: "button",
    icon: <AiOutlineJavaScript className="link-icon" />,
  },
  {
    name: "ReactJS",
    type: "button",
    icon: <FaReact className="link-icon" />,
  },
  {
    name: "Music",
    type: "button",
    icon: <IoMusicalNotes className="link-icon" />,
  },
  {
    name: "Education",
    type: "button",
    icon: <MdCastForEducation className="link-icon" />,
  },
  {
    name: "Podcast",
    type: "button",
    icon: <FaPodcast className="link-icon" />,
  },
  {
    name: "Movie",
    type: "button",
    icon: <TbMovie className="link-icon" />,
  },
  {
    name: "Gameing",
    type: "button",
    icon: <GrGamepad className="link-icon" />,
  },
  {
    name: "Live",
    type: "button",
    icon: <RiLiveLine className="link-icon" />,
  },
  {
    name: "Sport",
    type: "button",
    icon: <MdOutlineSportsBasketball className="link-icon" />,
  },
  {
    name: "Fashion",
    type: "button",
    icon: <BsStars className="link-icon" />,
  },
  {
    name: "Beauty",
    type: "button",
    icon: <GrDiamond className="link-icon" />,
  },
];
//Mora da se vidi st da se uradi sa ikonicama
