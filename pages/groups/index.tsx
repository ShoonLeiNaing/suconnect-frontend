import { Box, Chip } from "@mui/material";
import { useState } from "react";
import { IoGrid, IoListOutline } from "react-icons/io5";
import { BiRefresh } from "react-icons/bi";
import { RiFilterFill } from "react-icons/ri";
import BreadcrumbsComponent from "../../components/Breadcrumbs";
import MenuComponent from "../../components/MenuButton";
import Layout from "../../components/Layout";
import NameTag from "../../components/Profile/NameTag";
import SearchInput from "../../components/SearchInput";
import GridContainer from "../../components/DataGridView/GridContainer";
import Paginator from "../../components/Paginator";
import FilterSideBar from "../../components/FilterSideBar/FilterSideBar";
import { byCategory, groupData } from "../../data/testData";
import IconButton from "../../components/IconButton";
import FilterValueList from "../../components/Courses/FilterValueList";
import DataTable from "../../components/DataTable";
import ActionsMenu from "../../components/DataTable/ActionsMenu";
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

const handleDelete = () => {};

const columns = [
  {
    field: "no",
    headerName: "No.",
    width: 95,
  },
  { field: "date", headerName: "Date", minWidth: 150 },
  { field: "name", headerName: "Name", minWidth: 170 },
  {
    field: "parent",
    headerName: "Parent Group",
    minWidth: 170,
    filterable: false,
  },

  {
    field: "description",
    headerName: "Description",
    flex: 1,
    minWidth: 200,
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

const Groups = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [showSideFilter, setShowSideFilter] = useState<boolean>(false);
  const [isListView, setIsListView] = useState<boolean>(false);

  const [filterValue, setFilterValue] = useState<any>({
    filterTite: "",
    data: [],
    index: null,
  });

  const filterOptions = [
    {
      text: "Parent Group",
      data: byCategory,
      onClickHandler: () => {
        setFilterValue({ title: "Parent Group", data: byCategory, index: 0 });
        setShowSideFilter(true);
      },
    },
  ];

  return (
    <Layout allowToggle={false} hiddenFooter data={navigation} panel="panel3">
      <Box color="black" className="container" px={6}>
        <BreadcrumbsComponent
          currentPage="Groups"
          previousPages={breadCrumbsData}
        />
        <NameTag name="Thiha Swan Htet" currentPage="Groups" />
        <Box
          my={4}
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
          open={showSideFilter}
          setShowSideFilter={setShowSideFilter}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          filterOptions={filterOptions}
        />

        {!isListView ? (
          <Box>
            <FilterValueList filterOptions={filterOptions} />
            <Box margin="auto" maxWidth="1200px" my={8}>
              <GridContainer data={groupData} />
              <Box px={12} my={2}>
                <Paginator />
              </Box>
            </Box>
          </Box>
        ) : (
          // <TableView columns={columns} filterOptions={filterOptions} />
          <Box>
            <FilterValueList filterOptions={filterOptions} />
            <DataTable columns={columns} data={groupData} />
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default Groups;
