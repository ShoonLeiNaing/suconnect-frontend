import { Box } from "@mui/material";
import BreadcrumbsComponent from "../../components/Breadcrumbs";
import Layout from "../../components/Layout";
import BankingInfoCard from "../../components/Banking/BankInfoCard";
import { colors } from "../../data/constant";
import NameTag from "../../components/Profile/NameTag";

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
  return (
    <Layout hiddenFooter>
      <Box color="black" className="container" px={6}>
        <BreadcrumbsComponent
          currentPage="Banking"
          previousPages={breadCrumbsData}
        />
        <Box className="mb-8 mt-2">
          <NameTag
            name="Thiha Swan Htet"
            previousPage="My Profile"
            currentPage="Banking"
            tag="Lorem Ipsum Dolorum"
          />
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
      </Box>
    </Layout>
  );
};

export default Banking;
