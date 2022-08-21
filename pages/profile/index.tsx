import { Box, Typography } from "@mui/material";
import { useState } from "react";
import DateFilter from "../../components/DateFilter";
import SearchInput from "../../components/DateFilter/SearchInput";
import Layout from "../../components/Layout";
import Paginator from "../../components/Paginator";
import SubTitle from "../../components/SubTitle";
import { colors } from "../../data/constant";

const Profile = () => {
  const [filterText, setFilterText] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");

  return (
    <Layout>
      <Box color="black" className="container" py={4}>
        <SubTitle title="Feature Announcements" />
        <Box
          my={1}
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
          <Box my={6} color={colors.grey.grey2}>
            <Typography textAlign="center" fontSize="20px" fontWeight={600}>
              Showing Results for{" "}
              <span style={{ color: colors.black.black2 }}>
                {searchText || filterText}
              </span>
            </Typography>
            <Typography textAlign="center">
              Showing <span style={{ color: colors.black.black2 }}>8</span> from
              <span style={{ color: colors.black.black2 }}>123</span> results
            </Typography>
          </Box>
        )}

        <Paginator />
      </Box>
    </Layout>
  );
};

export default Profile;
