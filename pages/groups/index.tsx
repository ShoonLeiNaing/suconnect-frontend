import { Box, Typography } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import { IoGrid, IoListOutline } from "react-icons/io5";
import { BiRefresh } from "react-icons/bi";
import { RiFilterFill } from "react-icons/ri";
import moment from "moment";
import BreadcrumbsComponent from "../../components/Breadcrumbs";
import MenuComponent from "../../components/MenuButton";
import Layout from "../../components/Layout";
import NameTag from "../../components/Profile/NameTag";
import SearchInput from "../../components/SearchInput";
import GridContainer from "../../components/DataGridView/GridContainer";
import Paginator from "../../components/Paginator";
import FilterSideBar from "../../components/FilterSideBar/FilterSideBar";
import IconButton from "../../components/IconButton";
import FilterValueList from "../../components/FilterSideBar/FilterValueList";
import DataTable from "../../components/DataTable";
import ActionsMenu from "../../components/DataTable/ActionsMenu";
import { navigation } from "../../data/navigationData";
import { getAllGroups } from "../../api/groups/list";
import { getFilterParams } from "../../utils/common/getFilterParams";
import { filterGroups } from "../../api/groups/filter";

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

const handleDelete = () => {};

const columns = [
  { field: "name", headerName: "Name", minWidth: 200 },
  {
    field: "parent_id",
    headerName: "Parent Group",
    minWidth: 200,
    filterable: false,
    renderCell: (cellValues: any) => {
      return (
        <Typography fontSize="14px">
          {cellValues.value ? cellValues.value : "-"}
        </Typography>
      );
    },
  },

  {
    field: "description",
    headerName: "Description",
    flex: 1,
    width: "100%",
  },
  {
    field: "created_at",
    headerName: "Create At",
    width: 150,
    renderCell: (cellValues: any) => {
      return (
        <Typography fontSize="14px">
          {moment(cellValues.value).format("YYYY-MM-DD")}
        </Typography>
      );
    },
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

interface IProps {
  groups?: any;
  parents?: any;
}

const Groups: FunctionComponent<IProps> = ({ groups, parents }) => {
  const [searchText, setSearchText] = useState<string>("");
  const [showSideFilter, setShowSideFilter] = useState<boolean>(false);
  const [isListView, setIsListView] = useState<boolean>(false);
  const [filterData, setFilterData] = useState<any>({});
  const [data, setData] = useState<any>(groups?.data);
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(6);
  const [isFiltering, setIsFiltering] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(groups?.total_pages);
  const [loading, setLoading] = useState(false);
  const [groupsFilterData, setGroupsFilterData] = useState<any>(parents?.data);

  const [filterValue, setFilterValue] = useState<any>({
    filterTite: "",
    data: [],
    index: null,
    filterParam: "",
  });

  const filterOptions = [
    {
      text: "Parent Group",
      filterParam: "parent_id",
      data: groupsFilterData,
      onClickHandler: () => {
        setFilterValue({
          title: "Parent Group",
          data: groupsFilterData,
          index: 0,
          filterParam: "parent_id",
        });
        setShowSideFilter(true);
      },
    },
  ];

  const filterConfirmHandler = async () => {
    setPage(1);
    setIsFiltering(true);
    setShowSideFilter(false);
    const params = getFilterParams(filterData);
    const res = await filterGroups(size, 1, params);
    setData(res?.data);
    setTotalPages(res?.total_pages);
  };

  const paginationHandler = async () => {
    setLoading(true);
    let res: any;
    if (isFiltering) {
      const params = getFilterParams(filterData);
      res = await filterGroups(size, page, params);
    } else {
      res = await getAllGroups(size, page);
    }
    setData(res?.data);
    setTotalPages(res?.total_pages);
    setLoading(false);
  };

  useEffect(() => {
    paginationHandler();
  }, [page, size, isFiltering]);

  return (
    <Layout allowToggle={false} hiddenFooter data={navigation} panel="panel2">
      <Box color="black" className="container" px={6}>
        <BreadcrumbsComponent
          currentPage="Groups"
          previousPages={breadCrumbsData}
        />
        <NameTag name="Thiha Swan Htet" currentPage="Groups" />
        <Box
          my={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box display="flex" gap={2}>
            <SearchInput
              searchText={searchText}
              setSearchText={setSearchText}
            />

            <MenuComponent
              filterOptions={filterOptions}
              isIcon
              icon={<RiFilterFill />}
            />
          </Box>
          <Box display="flex" gap={2}>
            <IconButton
              onClickHandler={() => setIsListView(false)}
              isActive={!isListView}
              icon={<IoGrid fontSize="24px" />}
            />
            <IconButton
              onClickHandler={() => setIsListView(true)}
              isActive={isListView}
              icon={<IoListOutline fontSize="24px" />}
            />

            <IconButton
              onClickHandler={handleDelete}
              icon={<BiRefresh fontSize="26px" />}
            />
          </Box>
        </Box>

        <FilterSideBar
          {...{
            open: showSideFilter,
            setShowSideFilter,
            filterValue,
            setFilterValue,
            filterOptions,
            filterData,
            setFilterData,
            filterConfirmHandler,
          }}
        />
        <FilterValueList
          {...{
            filterData,
            setFilterData,
            setIsFiltering,
            setPage,
            setData,
            setTotalPages,
            size,
            filterFunction: filterGroups,
          }}
        />
        {!isListView ? (
          <Box>
            <Box margin="auto" maxWidth="1200px" mt={2} mb={8}>
              <GridContainer data={data} type="group" loading={loading} />
              <Box px={12} my={2}>
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
          </Box>
        ) : (
          // <TableView columns={columns} filterOptions={filterOptions} />
          <Box>
            <DataTable
              {...{ columns, data, page, setPage, totalPages, size, setSize }}
            />
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export async function getServerSideProps() {
  const groups = await getAllGroups(6, 1);
  const parents = await getAllGroups(-1, 1);
  return {
    props: {
      groups,
      parents,
    },
  };
}

export default Groups;
