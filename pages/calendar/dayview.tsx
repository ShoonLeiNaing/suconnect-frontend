import { Box, Chip, Typography } from "@mui/material";
import { useState } from "react";
import { BiRefresh } from "react-icons/bi";
import { RiFilterFill } from "react-icons/ri";
import BreadcrumbsComponent from "../../components/Breadcrumbs";
import MenuComponent from "../../components/MenuButton";
import Layout from "../../components/Layout";
import NameTag from "../../components/Profile/NameTag";
import SearchInput from "../../components/SearchInput";
import FilterSideBar from "../../components/FilterSideBar/FilterSideBar";
import { byCategory, byDate, byPosition, casesData } from "../../data/testData";
import { colors } from "../../data/constant";
import DateFilter from "../../components/Calendar/DateFilter";
// import FullDayTime from "./FullDayTime";
// import Event from "./Event";
import FilterValueList from "../../components/FilterSideBar/FilterValueList";

const breadCrumbsData = [
  {
    name: "Dashboard",
    link: "/dashboard",
  },
  {
    name: "My Profile",
    link: "/profile",
  },
];

const handleDelete = () => {};

const Cases = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [showSideFilter, setShowSideFilter] = useState<boolean>(false);

  const [filterValue, setFilterValue] = useState<any>({
    filterTite: "",
    data: [],
    index: null,
  });

  const filterOptions = [
    {
      text: "Calendar 1",
      data: byDate,
      onClickHandler: () => {
        setFilterValue({ title: "Calendar 1", data: byDate, index: 0 });
        setShowSideFilter(true);
      },
    },

    {
      text: "Calendar 2",
      data: byDate,
      onClickHandler: () => {
        setFilterValue({
          title: "Calendar 2",
          data: byDate,
          index: 1,
          date: true,
        });
        setShowSideFilter(true);
      },
    },
  ];

  const date = new Date();
  const longMonth = date.toLocaleString("en-us", { month: "long" });
  const month = date.toLocaleString("en-us", { month: "short" });
  const longWeekDay = date.toLocaleString("en-us", { weekday: "long" });
  const weekday = date.toLocaleString("en-us", { weekday: "short" });
  const day = date.toLocaleString("en-us", { day: "numeric" });

  return (
    // <Layout hiddenFooter data={navigation}>
    //   <Box color="black" className="container" px={6}>
    //     <BreadcrumbsComponent
    //       currentPage="Schedule"
    //       previousPages={breadCrumbsData}
    //     />
    //     <NameTag name="Thiha Swan Htet" currentPage="Schedule" />
    //     <Box
    //       my={4}
    //       display="flex"
    //       justifyContent="space-between"
    //       alignItems="center"
    //     >
    //       <Box display="flex" gap={2}>
    //         <SearchInput
    //           searchText={searchText}
    //           setSearchText={setSearchText}
    //         />

    //         <MenuComponent
    //           filterOptions={filterOptions}
    //           isIcon
    //           icon={<RiFilterFill />}
    //         />
    //       </Box>
    //     </Box>
    //     <Box className="pb-6">
    //       <DateFilter />
    //     </Box>

    //     <FilterSideBar
    //       open={showSideFilter}
    //       setShowSideFilter={setShowSideFilter}
    //       filterValue={filterValue}
    //       setFilterValue={setFilterValue}
    //       filterOptions={filterOptions}
    //     />

    //     <Box className="mb-6">
    //       {/* <FilterValueList filterOptions={filterOptions} /> */}

    //       <Box
    //         className="mt-6 p-5 rounded-lg"
    //         boxShadow="0 5px 15px rgb(0 0 0 / 0.1)"
    //       >
    //         <Typography color={colors.black.black2}>{weekday}</Typography>
    //         <Typography color={colors.primaryColors.lightblue.lightblue1}>
    //           {month} {day}{" "}
    //         </Typography>
    //       </Box>

    //       <Event />
    //       {/* <FullDayTime /> */}
    //     </Box>
    //   </Box>
    // </Layout>
    <p>hello</p>
  );
};

export default Cases;
