import { Box } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import BreadcrumbsComponent from "../../components/Breadcrumbs";
import Layout from "../../components/Layout";
import { colors } from "../../data/constant";
import NameTag from "../../components/Profile/NameTag";
import SearchInput from "../../components/DateFilter/SearchInput";
import DropDown from "../../components/DateFilter/DropDown";
import AccordionComponent from "../../components/Accordion";

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

  return (
    <Layout hiddenFooter>
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
            className="flex items-center my-8 py-2 px-4 text-white cursor-pointer rounded-lg"
            bgcolor={colors.primaryColors.lightblue.lightblue1}
            onClick={() => setAdd(!add)}
          >
            <FaPlus /> <span className="ml-2"> Add new addresses </span>
          </Box>
        </Box>
        <Box className="flex justify-between items-center mb-8">
          <SearchInput
            setFilterText={setFilterText}
            setSearchText={setSearchText}
          />
          <DropDown setFilterText={setFilterText} />
        </Box>
        <Box className="mb-4">
          <AccordionComponent title="My Address 1" orderNo={1} bgColor={colors.primaryColors.pink.pink1} />
          <AccordionComponent title="My Address 2" orderNo={2} bgColor={colors.secondaryColors.green.green1} />
          <AccordionComponent title="My Address 3" orderNo={3} bgColor={colors.primaryColors.yellow.yellow1} />
        </Box>
      </Box>
    </Layout>
  );
};

export default Addresses;
