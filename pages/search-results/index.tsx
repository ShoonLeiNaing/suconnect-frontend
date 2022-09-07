import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { RiFilterFill } from "react-icons/ri";
import BreadcrumbsComponent from "../../components/Breadcrumbs";
import Layout from "../../components/Layout";
import { colors } from "../../data/constant";
import NameTag from "../../components/Profile/NameTag";
import SearchInput from "../../components/DateFilter/SearchInput";
import { byCalendar, byCategory, byDate } from "../../data/testData";
import MenuComponent from "../../components/MenuButton";
import FilterSideBar from "../../components/FilterSideBar/FilterSideBar";
import ChipComponent from "../../components/ChipComponent";
import SearchResultsComponent from "../../components/SearchResults";

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

const SearchResults = () => {
  const [filterText, setFilterText] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("sprint");
  const [showSideFilter, setShowSideFilter] = useState<boolean>(false);

  const [filterValue, setFilterValue] = useState<any>({
    filterTite: "",
    data: [],
    index: null,
  });

  const filterOptions = [
    {
      text: "Calendar 1",
      data: byCalendar,
      onClickHandler: () => {
        setFilterValue({ title: "Calendar 1", data: byCalendar, index: 0 });
        setShowSideFilter(true);
      },
    },
    {
      text: "Calendar 2",
      data: byCalendar,
      onClickHandler: () => {
        setFilterValue({ title: "Calendar 2", data: byCalendar, index: 2 });
        setShowSideFilter(true);
      },
    },
  ];

  const handleDelete = () => {};

  return (
    <Layout hiddenFooter>
      <Box color="black" className="container" px={6}>
        <BreadcrumbsComponent
          currentPage="Schedule"
          previousPages={breadCrumbsData}
        />
        <Box className="flex justify-between mb-8 mt-2">
          <NameTag
            name="Thiha Swan Htet"
            previousPage="My Profile"
            currentPage="Schedule"
            tag="Set up your presence and needs"
          />
        </Box>
        <Box className="flex justify-between items-center mb-8">
          <Box display="flex" gap={2}>
            <SearchInput
              setFilterText={setFilterText}
              setSearchText={setSearchText}
            />
            <MenuComponent
              filterOptions={filterOptions}
              isIcon
              icon={<RiFilterFill />}
            />
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap={2} mb={4}>
          {filterOptions.map((option) => (
            <ChipComponent
              key={option.text}
              label={`by ${option.text}`}
              handleDelete={handleDelete}
            />
          ))}

          <Typography
            color={colors.secondaryColors.red.red1}
            fontSize="14px"
            className="cursor"
          >
            Clear all
          </Typography>
        </Box>
        <Box className="mb-4">
          <SearchResultsComponent searchWord={searchText} />
        </Box>
        <FilterSideBar
          open={showSideFilter}
          setShowSideFilter={setShowSideFilter}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          filterOptions={filterOptions}
        />
      </Box>
    </Layout>
  );
};

export default SearchResults;
