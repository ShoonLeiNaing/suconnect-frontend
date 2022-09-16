import { NextPage } from "next";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { BiRefresh } from "react-icons/bi";
import Layout from "../../components/Layout";
import UserViewCards from "../../components/UserViewCards";
import DateFilter from "../../components/DateFilter";
import SearchInput from "../../components/DateFilter/SearchInput";
import SubTitle from "../../components/SubTitle";
import { colors } from "../../data/constant";
import Paginator from "../../components/Paginator";
import IconButton from "../../components/IconButton";
import SmallButton from "../../components/Button/SmallButton";
import ActionsMenu from "../../components/DataTable/ActionsMenu";
import DataTable from "../../components/DataTable";
import { announcements } from "../../data/testData";
import { navigation } from "../../data/navigationData";

const AnnouncementUserView: NextPage = () => {
  const [filterText, setFilterText] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");
  const [isAdmin, setIsAdmin] = useState<boolean>(true);

  const handleDelete = () => {};

  const columns = [
    {
      field: "no",
      headerName: "No.",
      width: 95,
    },
    { field: "date", headerName: "Date", minWidth: 170 },
    { field: "name", headerName: "Name", minWidth: 170 },

    {
      field: "description",
      headerName: "Description",
      flex: 1,
      minWidth: 200,
      filterable: false,
    },

    {
      width: 90,
      field: "id",
      headerName: "More",
      sortable: false,
      filterable: false,

      renderCell: (cellValues: any) => {
        return <ActionsMenu />;
      },
    },
  ];

  return (
    <Layout hiddenFooter data={navigation}>
      <Box display="flex">
        <Box className="container p-12" color="black">
          <SubTitle
            title={isAdmin ? "See all announcements" : "Feature Announcements"}
          />

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
            {isAdmin ? (
              <Box display="flex" gap={2}>
                <SmallButton
                  text="Create"
                  customHeight="45px"
                  customPaddingX="15px"
                />
                <IconButton
                  icon={<BiRefresh fontSize="24px" />}
                  onClickHandler={() => {}}
                />
              </Box>
            ) : (
              <Box mt="-25px">
                <DateFilter />
              </Box>
            )}
          </Box>

          {!isAdmin && (searchText || (filterText && filterText !== "all")) && (
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

          {/* {isAdmin ? (
            <DataTable columns={columns} data={announcements} />
          ) : (
            <Box className="container" py={2}>
              <UserViewCards />
              <Box mt={2}>
                <Paginator />
              </Box>
            </Box>
          )} */}
        </Box>
      </Box>
    </Layout>
  );
};

export default AnnouncementUserView;
