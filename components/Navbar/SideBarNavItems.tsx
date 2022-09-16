/* eslint-disable array-callback-return */

import { useState, SyntheticEvent, FunctionComponent } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  styled,
  Box,
  Icon,
} from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/router";
import { colors } from "../../data/constant";
import SideDropDown from "./SideDropDown";

interface NavTitle {
  navTitle: string;
  iconBgColor: string;
  icon: string;
  panel?: string;
}
interface IProps {
  data: any[];
  status: boolean;
  panel?: any;
}

const SideBarNavItems: FunctionComponent<IProps> = ({
  data,
  status,
  panel,
}) => {
  const BootstrapAccordion = styled(Accordion)({
    boxShadow: "0px 0px 0px",
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
    "&.MuiAccordionSummary-content.Mui-expanded" : {
      margin: "0px",
    }
  });

  const router = useRouter();

  // let currentPage;
  // data.map((navTitle, index) => {
  //   navTitle.dropdown.map((item: any) => {
  //     if (router.pathname === item.link) {
  //       currentPage = `panel${index + 1}`;
  //     }
  //   });
  // });

  const [expanded, setExpanded] = useState<string | false>(panel);

  const handleChange =
    (newpanel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? newpanel : false);
    };

  return (
    <Box>
      {data?.map((navTitle, index) => (
        <BootstrapAccordion
          className={` ${ expanded && !status && "!m-auto" } ${status ? "w-56" : "w-8 ml-0"} `}
          key={index}
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
        >
          <AccordionSummary
            className={`mt-0  ${ expanded && !status ? "": "!my-0" }`}
            expandIcon={
              <Box
                className={` ${
                  status ? "flex" : "hidden"
                } cursor-pointer rounded-full p-[0.15rem]`}
                sx={{ backgroundColor: navTitle.color }}
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
                sx={{ backgroundColor: navTitle.color }}
              >
                <Icon component={navTitle.icon} sx={{ color: "white" }} />
              </Box>
              <Typography
                className={`${status ? "flex" : "hidden"}`}
                fontSize="15px"
                marginLeft="0.7rem"
                color={colors.black.black1}
              >
                {navTitle.text}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails className="my-0 -mt-2 py-0">
            {navTitle.dropdown?.map((item: any) => (
              <SideDropDown data={item} color={navTitle.color} />
            ))}
          </AccordionDetails>
        </BootstrapAccordion>
      ))}
    </Box>
  );
};

export default SideBarNavItems;
