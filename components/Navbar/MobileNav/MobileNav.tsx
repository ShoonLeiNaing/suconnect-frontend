import {
  Accordion,
  Box,
  Drawer,
  styled,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Icon,
} from "@mui/material";
import { FunctionComponent, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiCloseCircleLine } from "react-icons/ri";
import { colors } from "../../../data/constant";
import SideDropDown from "../SideNav/SideDropDown";

interface IProps {
  open: boolean;
  setOpenMobileNav: any;
  data?: any;
}

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
  "&.MuiAccordionSummary-content.Mui-expanded": {
    margin: "0px",
  },
});

const MobileNav: FunctionComponent<IProps> = ({
  open,
  setOpenMobileNav,
  data,
}) => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange =
    (newpanel: string) => (event: any, isExpanded: boolean) => {
      setExpanded(isExpanded ? newpanel : false);
    };

  return (
    <Drawer anchor="left" open={open} onClose={() => setOpenMobileNav(false)}>
      <Box width="270px" p={2}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <img src="/images/logo.svg" alt="logo" />
          <RiCloseCircleLine
            fontSize="24px"
            onClick={() => setOpenMobileNav(false)}
          />
        </Box>
        <Box mt={2}>
          {data?.map((navTitle: any, index: number) => (
            <BootstrapAccordion
              key={index}
              onChange={handleChange(`panel${index + 1}`)}
            >
              <AccordionSummary
                expandIcon={
                  <Box
                    className="cursor-pointer rounded-full p-[0.15rem]"
                    sx={{ backgroundColor: navTitle.color }}
                  >
                    <IoIosArrowDown fontSize="14px" color="white" />{" "}
                  </Box>
                }
              >
                <Box className="flex justify-center items-center m-0">
                  <Box
                    width="35px"
                    height="35px"
                    borderRadius="9px"
                    className="flex justify-center items-center m-0"
                    sx={{ backgroundColor: navTitle.color }}
                  >
                    <Icon component={navTitle.icon} sx={{ color: "white" }} />
                  </Box>
                  <Typography
                    fontSize="14px"
                    marginLeft="0.7rem"
                    color={colors.black.black1}
                  >
                    {navTitle.text}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails className="my-0 -mt-2 py-0">
                {navTitle.dropdown?.map((item: any) => (
                  <SideDropDown
                    data={item}
                    color={navTitle.color}
                    key={item.text}
                  />
                ))}
              </AccordionDetails>
            </BootstrapAccordion>
          ))}

          <Box
            position="absolute"
            display="flex"
            width="240px"
            bottom={0}
            py={2}
            justifyContent="space-between"
          >
            <Typography
              fontSize="14px"
              // className={`${slideOpen ? "block" : "hidden"} `}
              color={colors.secondaryColors.red.red1}
            >
              Log out
            </Typography>
            <img src="/images/logout.svg" alt="logout" />
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default MobileNav;
