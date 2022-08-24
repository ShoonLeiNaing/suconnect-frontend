import { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Layout from "../../components/Layout";
import PreviousPage from "../../components/PreviousPage";
import HorizontalButton from "../../components/Button/HorizontalButton";
import UserViewCards from "../../components/UserViewCards";
import DateFilter from "../../components/DateFilter";
import SearchInput from "../../components/DateFilter/SearchInput";
import SubTitle from "../../components/SubTitle";
import { colors } from "../../data/constant";
import Paginator from "../../components/Paginator";
import SideBarNav from "../../components/Navbar/SideBarNav";

const AnnouncementUserView: NextPage = () => {
  const [filterText, setFilterText] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");
  return (
    <Layout>
      <Box display="flex">
        <SideBarNav />
        <Box className="container p-12" color="black">
          <SubTitle title="Feature Announcements" />

          <Box
            my={2}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <SearchInput
              setFilterText={setFilterText}
              setSearchText={setSearchText}
            />
            <Box mt="-25px">
              <DateFilter />
            </Box>
          </Box>

          {(searchText || (filterText && filterText !== "all")) && (
            <Box my={4} color={colors.grey.grey2}>
              <Typography textAlign="center" fontSize="20px" fontWeight={600}>
                Showing Results for{" "}
                <span style={{ color: colors.black.black2 }}>
                  {searchText || filterText}
                </span>
              </Typography>
              <Typography textAlign="center">
                Showing <span style={{ color: colors.black.black2 }}>8</span>{" "}
                from
                <span style={{ color: colors.black.black2 }}>123</span> results
              </Typography>
            </Box>
          )}
          <Box className="container" py={2}>
            {/* <PreviousPage /> */}
            <UserViewCards />
          </Box>
          <Paginator />
        </Box>
      </Box>
    </Layout>
  );
};

export default AnnouncementUserView;
