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
import {
  byCategory,
  byDate,
  byPosition,
  courseData,
} from "../../data/testData";
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
  { field: "date", headerName: "Date", flex: 1, minWidth: 200 },
  { field: "name", headerName: "Course", flex: 1, minWidth: 200 },

  {
    field: "position",
    headerName: "Position",
    flex: 1,
    minWidth: 200,
    filterable: false,
    renderCell: (cellValues: any) => {
      return (
        <Chip
          label={cellValues.value}
          sx={{ borderRadius: "0", backgroundColor: "pink" }}
        />
      );
    },
  },
  {
    field: "category",
    headerName: "Category",
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

  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   flex: 1,
  //   valueGetter: (params: any) => {
  //     return `${params.getValue(params.id, "firstName") || ""} ${
  //       params.getValue(params.id, "lastName") || ""
  //     }`;
  //   },
  // },
];

const Courses = () => {
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
      text: "Category",
      data: byCategory,
      onClickHandler: () => {
        setFilterValue({ title: "Category", data: byCategory, index: 0 });
        setShowSideFilter(true);
      },
    },

    {
      text: "Position",
      data: byPosition,
      onClickHandler: () => {
        setFilterValue({ title: "Position", data: byPosition, index: 1 });
        setShowSideFilter(true);
      },
    },
    {
      text: "Date",
      data: byDate,
      onClickHandler: () => {
        setFilterValue({ title: "Date", data: byDate, index: 2 });
        setShowSideFilter(true);
      },
    },
  ];

  return (
    <Layout allowToggle={false} hiddenFooter data={navigation} panel="panel2">
      <Box color="black" className="container" px={6}>
        <BreadcrumbsComponent
          currentPage="Courses"
          previousPages={breadCrumbsData}
        />
        <NameTag name="Thiha Swan Htet" currentPage="Courses" />
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
              <GridContainer showCategory data={courseData} />
              <Box px={12} my={2}>
                <Paginator />
              </Box>
            </Box>
          </Box>
        ) : (
          <Box>
            <FilterValueList filterOptions={filterOptions} />
            <DataTable columns={columns} data={courseData} />
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default Courses;
