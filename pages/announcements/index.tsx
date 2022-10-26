import { Box, Typography } from "@mui/material";
import { FunctionComponent, useState, useEffect } from "react";
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
import { navigation } from "../../data/navigationData";
import { getFilterParams } from "../../utils/common/getFilterParams";
import { getAllAnnouncements } from "../../api/announcements/list";
import { filterAnnouncements } from "../../api/announcements/filter";

const columns = [
  {
    field: "id",
    headerName: "No.",
    width: 95,
  },
  { field: "created_at", headerName: "Date", minWidth: 170 },
  { field: "created_by", headerName: "Created by", minWidth: 170 },
  { field: "title", headerName: "Name", minWidth: 170 },
  {
    field: "body",
    headerName: "Description",
    flex: 1,
    minWidth: 200,
    filterable: false,
  },

  {
    width: 90,
    headerName: "More",
    sortable: false,
    filterable: false,

    renderCell: (cellValues: any) => {
      return <ActionsMenu />;
    },
  },
];

interface IProps {
  announcements?: any;
}

const AnnouncementUserView: FunctionComponent<IProps> = ({ announcements }) => {
  const [filterText, setFilterText] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");
  const [isAdmin, setIsAdmin] = useState<boolean>(true);
  const [data, setData] = useState<any>(announcements.data);
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(6);
  const [isFiltering, setIsFiltering] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(
    announcements.total_pages
  );
  const [loading, setLoading] = useState(false);
  const [showSideFilter, setShowSideFilter] = useState<boolean>(false);
  const [filterData, setFilterData] = useState<any>({});

  const paginationHandler = async () => {
    setLoading(true);
    let res: any;
    if (isFiltering) {
      const params = getFilterParams(filterData);
      res = await filterAnnouncements(size, page, params);
    } else {
      res = await getAllAnnouncements(size, page);
    }
    setData(res?.data);
    setTotalPages(res?.total_pages);
    setLoading(false);
  };

  useEffect(() => {
    paginationHandler();
  }, [page, size, isFiltering]);

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
                  // customPaddingX="15px"
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

          {isAdmin ? (
            <DataTable
              {...{ columns, data, page, setPage, totalPages, size, setSize }}
            />
          ) : (
            <Box className="container" py={2}>
              <UserViewCards />
              <Box mt={2}>
                <Paginator
                  {...{
                    page,
                    setPage,
                    totalPages,
                    item: "item",
                    size,
                    setSize,
                  }}
                />
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Layout>
  );
};

export async function getServerSideProps() {
  const announcements = await getAllAnnouncements(-1, 1);
  return {
    props: {
      announcements,
    },
  };
}

export default AnnouncementUserView;
