import { Box, Typography } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import { RiFilterFill } from "react-icons/ri";
import BreadcrumbsComponent from "../../components/Breadcrumbs";
import Layout from "../../components/Layout";
import { colors } from "../../data/constant";
import NameTag from "../../components/Profile/NameTag";
import SearchInput from "../../components/DateFilter/SearchInput";
import DropDown from "../../components/DateFilter/DropDown";
import AccordionComponent from "../../components/Accordion";
import { byCategory, byDate } from "../../data/testData";
import MenuComponent from "../../components/MenuButton";
import FilterSideBar from "../../components/FilterSideBar/FilterSideBar";
import ChipComponent from "../../components/ChipComponent";
import { navigation } from "../../data/navigationData";

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

const Addresses = () => {
  const [filterText, setFilterText] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");
  const [add, setAdd] = useState(false);
  const [showSideFilter, setShowSideFilter] = useState<boolean>(false);

  const newAddressCard = () => {
    setAdd(!add);
    setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 100);
  };

  const [filterValue, setFilterValue] = useState<any>({
    filterTite: "",
    data: [],
    index: null,
  });

  const filterOptions = [
    {
      text: "Address Type",
      data: byCategory,
      onClickHandler: () => {
        setFilterValue({ title: "Address Type", data: byCategory, index: 0 });
        setShowSideFilter(true);
      },
    },
    {
      text: "Date",
      data: byDate,
      onClickHandler: () => {
        setFilterValue({ title: "Date", data: byDate, index: 2 });
        setShowSideFilter(true);
      },
    },
  ];

  const handleDelete = () => {};

  return (
    <Layout hiddenFooter data={navigation} panel="panel3">
      <Box color="black" className="container" px={6}>
        <BreadcrumbsComponent
          currentPage="Addresses"
          previousPages={breadCrumbsData}
        />
        <Box className="flex justify-between mb-8 mt-2">
          <NameTag
            name="Thiha Swan Htet"
            previousPage="My Profile"
            currentPage="Addresses"
            tag="Lorem Ipsum Dolorum"
          />
          <Box
            className="flex items-center my-4 py-2 px-4 text-white cursor-pointer rounded-lg"
            bgcolor={colors.primaryColors.lightblue.lightblue1}
            onClick={() => newAddressCard()}
          >
            <FaPlus />{" "}
            <span className="ml-2" style={{ fontSize: "14px" }}>
              {" "}
              Add new addresses{" "}
            </span>
          </Box>
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
          <DropDown setFilterText={setFilterText} individual />
        </Box>
        <Box display="flex" alignItems="center" gap={2} mb={4}>
          {filterOptions.map((option) => (
            <ChipComponent
              key={option.text}
              label={`by ${option.text.toLowerCase()}`}
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
          <AccordionComponent
            title="My Address 1"
            isOpen
            orderNo={1}
            bgColor={colors.primaryColors.pink.pink1}
          />
          <AccordionComponent
            title="My Address 2"
            orderNo={2}
            bgColor={colors.secondaryColors.green.green1}
          />
          <AccordionComponent
            title="My Address 3"
            orderNo={3}
            bgColor={colors.primaryColors.yellow.yellow1}
          />
          {add && (
            <AccordionComponent
              title="My new address"
              orderNo={4}
              bgColor={colors.primaryColors.pink.pink1}
              isNew
            />
          )}
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

export default Addresses;
