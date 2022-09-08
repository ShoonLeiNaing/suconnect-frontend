import { useState, SyntheticEvent, FunctionComponent } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  styled,
  Box,
} from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import { FaPoll, FaCog, FaBookReader } from "react-icons/fa";
import { colors } from "../../data/constant";
import SideDropDown from "./SideDropDown";

interface NavTitle {
  navTitle: string;
  iconBgColor: string;
  icon: string;
}
interface IProps {
  navTitles: NavTitle[];
  status: boolean;
}

const SideBarNavItems: FunctionComponent<IProps> = ({ navTitles, status }) => {
  const BootstrapAccordion = styled(Accordion)({
    boxShadow: "0px 0px 0px",
    padding: "1px 0",
    marginBottom: "0px",
    marginLeft: "-1rem",
    "&.MuiAccordion-root:before": {
      backgroundColor: "white",
    },
    "&.MuiAccordion-root.Mui-expanded": {
      marginTop: "0",
      transition: "0.3s all ease-in",
      transitionDuration: "300s",
      marginLeft: "-1rem",
    },
  });

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box>
      {navTitles?.map((navTitle, index) => (
        <BootstrapAccordion
          className={` ${status ? "w-56 -ml-4" : "w-8 ml-0"} `}
          key={index}
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
        >
          <AccordionSummary
            className="mt-0"
            expandIcon={
              <Box
                className={` ${
                  status ? "flex" : "hidden"
                } cursor-pointer rounded-full p-[0.15rem]`}
                sx={{ backgroundColor: navTitle.iconBgColor }}
              >
                <IoIosArrowDown fontSize="14px" color="white" />{" "}
              </Box>
            }
          >
            <Box className="flex justify-center items-center m-0">
              <Box
                width="2.5rem"
                padding="0.5rem"
                borderRadius="9px"
                sx={{ backgroundColor: navTitle.iconBgColor }}
              >
                <img className="w-6 h-6" src={navTitle.icon} alt="sideicons" />
              </Box>
              <Typography
                className={`${status ? "flex" : "hidden"}`}
                fontSize="16px"
                marginLeft="0.7rem"
                color={colors.black.black1}
              >
                {navTitle.navTitle}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails className="my-0 -mt-2 py-0">
            <SideDropDown
              title="DropDown 1"
              iconColor={navTitle.iconBgColor}
              icon={<FaBookReader />}
            />
            <SideDropDown
              title="DropDown 2"
              iconColor={navTitle.iconBgColor}
              icon={<FaPoll />}
            />
            <SideDropDown
              title="DropDown 3"
              iconColor={navTitle.iconBgColor}
              icon={<FaCog />}
            />
          </AccordionDetails>
        </BootstrapAccordion>
      ))}
    </Box>
  );
};

export default SideBarNavItems;
