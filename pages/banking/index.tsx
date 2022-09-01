import { Box } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import BreadcrumbsComponent from "../../components/Breadcrumbs";
import Layout from "../../components/Layout";
import BankingInfoCard from "../../components/Banking/BankInfoCard";
import { colors } from "../../data/constant";
import NameTag from "../../components/Profile/NameTag";
import SearchInput from "../../components/DateFilter/SearchInput";
import DropDown from "../../components/DateFilter/DropDown";
import BankingInfoEditCard from "../../components/Banking/BankInfoEditCard";

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

const Banking = () => {
  const [filterText, setFilterText] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");
  const [add, setAdd] = useState(false);

  return (
    <Layout hiddenFooter>
      <Box color="black" className="container" px={6}>
        <BreadcrumbsComponent
          currentPage="Banking"
          previousPages={breadCrumbsData}
        />
        <Box className="flex justify-between mb-8 mt-2">
          <NameTag
            name="Thiha Swan Htet"
            previousPage="My Profile"
            currentPage="Banking"
            tag="Lorem Ipsum Dolorum"
          />
          <Box
            className="flex items-center my-8 py-2 px-4 text-white cursor-pointer rounded-lg"
            bgcolor={colors.primaryColors.lightblue.lightblue1}
            onClick={() => setAdd(!add)}
          >
            <FaPlus /> <span className="ml-2"> Add new account </span>
          </Box>
        </Box>
        <Box className="flex justify-between items-center mb-8">
          <SearchInput
            setFilterText={setFilterText}
            setSearchText={setSearchText}
          />
          <DropDown setFilterText={setFilterText} individual />
        </Box>
        <Box className="flex justify-between items-center">
          <BankingInfoCard
            title="My Account 1"
            bgColor={colors.primaryColors.pink.pink1}
          />
          <BankingInfoCard
            title="My Account 2"
            bgColor={colors.secondaryColors.green.green1}
          />
          <BankingInfoCard
            title="My Account 3"
            bgColor={colors.primaryColors.yellow.yellow1}
          />
        </Box>
        {add && (
          <BankingInfoEditCard
            title="My Account 4"
            bgColor={colors.secondaryColors.orange.orange1}
          />
        )}
      </Box>
    </Layout>
  );
};

export default Banking;
