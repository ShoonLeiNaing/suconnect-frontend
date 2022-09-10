import { PersonOffOutlined } from "@mui/icons-material";
import { FaBookReader } from "react-icons/fa";
import { MdDashboard, MdPerson } from "react-icons/md";
import { colors } from "./constant";

export const navigation = [
  {
    id: 1,
    text: "General",
    icon: "/images/sidebaricon1.svg",
    color: colors.primaryColors.lightblue.lightblue1,
    dropdown: [
      {
        text: "Dashboard",
        link: "/dashboard",
        icon: MdDashboard,
      },
      {
        text: "Profile",
        link: "/profile",
        icon: MdPerson,
      },
    ],
  },
  {
    id: 1,
    text: "General",
    icon: "/images/sidebaricon1.svg",
    color: colors.primaryColors.lightblue.lightblue1,
    dropdown: [
      {
        text: "Dashboard",
        link: "/dashboard",
        icon: MdDashboard,
      },
      {
        text: "Profile",
        link: "/profile",
        icon: MdPerson,
      },
    ],
  },
];
