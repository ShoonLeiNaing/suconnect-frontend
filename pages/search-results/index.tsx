import { Box } from "@mui/material";
import { useState } from "react";
import BreadcrumbsComponent from "../../components/Breadcrumbs";
import Layout from "../../components/Layout";
import NameTag from "../../components/Profile/NameTag";
import SearchInput from "../../components/DateFilter/SearchInput";
import { byCalendar } from "../../data/testData";
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
          </Box>
        </Box>

        <Box className="mb-4">
          <SearchResultsComponent searchWord={searchText} />
        </Box>
      </Box>
    </Layout>
  );
};

export default SearchResults;
