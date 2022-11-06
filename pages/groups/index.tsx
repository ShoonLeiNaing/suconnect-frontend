import { Box, Typography } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import { IoGrid, IoListOutline } from "react-icons/io5";
import { BiRefresh } from "react-icons/bi";
import { RiFilterFill } from "react-icons/ri";
import moment from "moment";
import dynamic from "next/dynamic";
import { navigation } from "../../data/navigationData";
import { getAllGroups } from "../../api/groups/list";
import { getFilterParams } from "../../utils/common/getFilterParams";
import { filterGroups } from "../../api/groups/filter";

const Layout = dynamic(import("../../components/Layout"), { ssr: false });
const BreadcrumbsComponent = dynamic(import("../../components/Breadcrumbs"), {
  ssr: false,
});
const GridContainer = dynamic(
  import("../../components/DataGridView/GridContainer"),
  {
    ssr: false,
  }
);
const SearchInput = dynamic(import("../../components/DateFilter/SearchInput"), {
  ssr: false,
});
const FilterValueList = dynamic(
  import("../../components/FilterSideBar/FilterValueList"),
  {
    ssr: false,
  }
);
const Paginator = dynamic(import("../../components/Paginator"), { ssr: false });
const IconButton = dynamic(import("../../components/IconButton"), {
  ssr: false,
});
const ActionsMenu = dynamic(import("../../components/DataTable/ActionsMenu"), {
  ssr: false,
});
const DataTable = dynamic(import("../../components/DataTable"), {
  ssr: false,
});
const MenuComponent = dynamic(import("../../components/MenuButton"), {
  ssr: false,
});
const NameTag = dynamic(import("../../components/Profile/NameTag"), {
  ssr: false,
});
const FilterSideBar = dynamic(
  import("../../components/FilterSideBar/FilterSideBar"),
  {
    ssr: false,
  }
);

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
      <Box
        color="black"
        className="container"
        px={{ lg: 6, md: 4, sm: 4, xs: 2 }}
      >
        <Box>
          <BreadcrumbsComponent
            currentPage="Groups"
            previousPages={breadCrumbsData}
          />
          <NameTag name="Thiha Swan Htet" currentPage="Groups" />
        </Box>
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
            <Box
              margin="auto"
              maxWidth="1200px"
              mt={2}
              mb={8}
              display="grid"
              justifyContent="center"
              alignItems="center"
            >
              <GridContainer data={data} type="group" loading={loading} />
              <Box my={4}>
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
