import { SpaceBar } from "@mui/icons-material";
import { Box, Chip, Divider, IconButton } from "@mui/material";
import { useState } from "react";
import { IoGrid, IoListOutline } from "react-icons/io5";
import { BiRefresh } from "react-icons/bi";
import BreadcrumbsComponent from "../../components/Breadcrumbs";
import Filter from "../../components/MenuButton";
import Layout from "../../components/Layout";
import NameTag from "../../components/Profile/NameTag";
import SearchInput from "../../components/SearchInput";
import { colors } from "../../data/constant";
import CourseContainer from "../../components/Courses/CourseContainer";
import Paginator from "../../components/Paginator";
import FilterSideBar from "../../components/FilterSideBar/FilterSideBar";
import { byCategory, byDate, byPosition } from "../../data/testData";

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

const Courses = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [showSideFilter, setShowSideFilter] = useState<boolean>(false);
  const [filterValue, setFilterValue] = useState<any>({
    filterTite: "",
    data: [],
  });

  const filterOptions = [
    {
      text: "Category",
      onClickHandler: () => {
        setFilterValue({ title: "Category", data: byCategory });
        setShowSideFilter(true);
      },
    },
    {
      text: "Position",
      onClickHandler: () => {
        setFilterValue({ title: "Position", data: byPosition });
        setShowSideFilter(true);
      },
    },
    {
      text: "Date",
      onClickHandler: () => {
        setFilterValue({ title: "Date", data: byDate });
        setShowSideFilter(true);
      },
    },
  ];

  return (
    <Layout allowToggle={false} hiddenFooter>
      <Box color="black" className="container" px={6}>
        <BreadcrumbsComponent
          currentPage="Courses"
          previousPages={breadCrumbsData}
        />
        <NameTag name="Thiha Swan Htet" currentPage="Courses" />
        <Box
          my={4}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box display="flex" gap={2}>
            <SearchInput
              searchText={searchText}
              setSearchText={setSearchText}
            />
            <Filter filterOptions={filterOptions} />
          </Box>
          <Box display="flex" gap={2}>
            <Box
              p={1}
              borderRadius="8px"
              width="fit-content"
              bgcolor={colors.white.white2}
              height="fit-content"
              // onClick={() => resetDates()}
            >
              <IoListOutline
                color={colors.primaryColors.lightblue.lightblue1}
                fontSize="26px"
              />
            </Box>
            <Box
              p={1}
              borderRadius="8px"
              width="fit-content"
              bgcolor={colors.primaryColors.lightblue.lightblue1}
              height="fit-content"
              color="white"
              // onClick={() => resetDates()}
            >
              <IoGrid color="white" fontSize="24px" />
            </Box>
            <Box
              p={1}
              borderRadius="8px"
              width="fit-content"
              bgcolor={colors.white.white2}
              height="fit-content"
              // onClick={() => resetDates()}
            >
              <BiRefresh
                color={colors.primaryColors.lightblue.lightblue1}
                fontSize="26px"
              />
            </Box>
          </Box>
        </Box>

        <FilterSideBar
          open={showSideFilter}
          setShowSideFilter={setShowSideFilter}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          filterOptions={filterOptions}
          // toggleDrawer={toggleDrawer}
        />

        <Box display="flex" gap={2}>
          <Chip
            sx={{
              color: colors.primaryColors.lightblue.lightblue1,
              backgroundColor: colors.white.white2,
              borderRadius: "10px",
            }}
            label="by position"
            onDelete={handleDelete}
          />
          <Chip
            sx={{
              color: colors.primaryColors.lightblue.lightblue1,
              backgroundColor: colors.white.white2,
              borderRadius: "10px",
            }}
            label="by category"
            onDelete={handleDelete}
          />
          <Chip
            sx={{
              color: colors.primaryColors.lightblue.lightblue1,
              backgroundColor: colors.white.white2,
              borderRadius: "10px",
            }}
            label="by date"
            onDelete={handleDelete}
          />
        </Box>

        <Box margin="auto" maxWidth="1200px" my={8}>
          <CourseContainer />
          <Box px={12} my={2}>
            <Paginator />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Courses;
