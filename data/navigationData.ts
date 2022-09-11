import {
  MdDashboard,
  MdFactCheck,
  MdGroups,
  MdPerson,
  MdPrivacyTip,
} from "react-icons/md";
import {
  AiFillCalendar,
  AiFillDatabase,
  AiFillRead,
  AiFillSetting,
  AiOutlineBranches,
  AiTwotoneEdit,
} from "react-icons/ai";
import { BsFillGridFill } from "react-icons/bs";
import { IoIosChatboxes, IoMdWallet } from "react-icons/io";
import { ImAddressBook } from "react-icons/im";
import { IoHelpCircle, IoKeySharp } from "react-icons/io5";
import { colors } from "./constant";

export const navigation = [
  {
    id: 1,
    text: "General",
    icon: AiFillSetting,
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
    id: 2,
    text: "Enrollment",
    icon: AiFillRead,
    color: colors.primaryColors.pink.pink1,
    dropdown: [
      {
        text: "Schedule",
        link: "/schedule",
        icon: AiFillCalendar,
      },
      {
        text: "Courses",
        link: "/courses",
        icon: BsFillGridFill,
      },
      {
        text: "Departments",
        link: "/departments",
        icon: AiFillDatabase,
      },
      {
        text: "Groups",
        link: "/groups",
        icon: MdGroups,
      },
    ],
  },
  {
    id: 3,
    text: "Management",
    icon: AiOutlineBranches,
    color: colors.primaryColors.yellow.yellow1,
    dropdown: [
      {
        text: "Banking",
        link: "/banking",
        icon: IoMdWallet,
      },
      {
        text: "Cases",
        link: "/cases",
        icon: MdFactCheck,
      },
      {
        text: "Addresses",
        link: "/addresses",
        icon: ImAddressBook,
      },
      {
        text: "Update Profile",
        link: "/update-profile",
        icon: AiTwotoneEdit,
      },
    ],
  },
  {
    id: 4,
    text: "Help & support",
    icon: IoHelpCircle,
    color: colors.secondaryColors.green.green1,
    dropdown: [
      {
        text: "Privacy",
        link: "/privacy",
        icon: MdPrivacyTip,
      },
      {
        text: "FAQ",
        link: "/faq",
        icon: IoIosChatboxes,
      },
      {
        text: "Help",
        link: "/help",
        icon: IoHelpCircle,
      },
    ],
  },
  {
    id: 5,
    text: "Security",
    icon: MdPrivacyTip,
    color: colors.secondaryColors.orange.orange1,
    dropdown: [
      {
        text: "Reset Password",
        link: "/reset-password",
        icon: IoKeySharp,
      },
    ],
  },
];

// {
//   data?.map((item) => (
//     <SideBarNavItem
//       key={item.text}
//       status={slideOpen}
//       title={item.text}
//       icon={item.icon}
//       iconBgColor={colors.primaryColors.lightblue.lightblue1}
//       dropdown={item}
//     />
//   ));
// }
