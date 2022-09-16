import { Box, Chip, Typography } from "@mui/material";
import { FunctionComponent, useEffect, useMemo, useState } from "react";
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
import IconButton from "../../components/IconButton";
import FilterValueList from "../../components/FilterSideBar/FilterValueList";
import DataTable from "../../components/DataTable";
import ActionsMenu from "../../components/DataTable/ActionsMenu";
import { navigation } from "../../data/navigationData";
import { getAllCourses } from "../../api/courses/list";
import { getAllCategories } from "../../api/categories/list";
import { filterCourses } from "../../api/courses/filter";
import { getFilterParams } from "../../utils/common/getFilterParams";

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
  // {
  //   field: "no",
  //   headerName: "No.",
  //   width: 95,
  // },
  { field: "name", headerName: "Name", flex: 1, minWidth: 180 },

  { field: "start_date", headerName: "Start Date", flex: 1, minWidth: 150 },
  { field: "end_date", headerName: "End Date", flex: 1, minWidth: 150 },
  { field: "code", headerName: "Code", flex: 1, minWidth: 100 },
  {
    field: "monthly_fee",
    headerName: "Fee",
    flex: 1,
    minWidth: 150,
    filterable: false,
    renderCell: (cellValues: any) => {
      return <Typography fontSize="14px">{cellValues.value} mmk</Typography>;
    },
  },

  // {
  //   field: "position",
  //   headerName: "Position",
  //   flex: 1,
  //   minWidth: 200,
  //   filterable: false,
  //   renderCell: (cellValues: any) => {
  //     return (
  //       <Chip
  //         label={cellValues.value}
  //         sx={{ borderRadius: "0", backgroundColor: "pink" }}
  //       />
  //     );
  //   },
  // },
  {
    field: "category",
    headerName: "Category",
    flex: 1,
    minWidth: 150,
    filterable: false,
  },
  {
    field: "description",
    headerName: "Description",
    flex: 1,
    minWidth: 150,
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
interface IProps {
  courses?: any;
  categories?: any;
}

const Courses: FunctionComponent<IProps> = ({ courses, categories }) => {
  const [searchText, setSearchText] = useState<string>("");
  const [showSideFilter, setShowSideFilter] = useState<boolean>(false);
  const [filterData, setFilterData] = useState<any>({});
  const [isListView, setIsListView] = useState<boolean>(false);
  const [data, setData] = useState<any>(courses.data);
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(6);
  const [isFiltering, setIsFiltering] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(courses.total_pages);
  const [loading, setLoading] = useState(false);
  const [categoryFilterData, setCategoryFilterData] = useState<any>(
    categories?.data
  );

  const [filterValue, setFilterValue] = useState<any>({
    filterTite: "",
    data: [],
    index: null,
    filterParam: "",
  });

  const filterOptions = [
    {
      text: "Category",
      data: categoryFilterData,
      filterParam: "category",
      onClickHandler: () => {
        setFilterValue({
          title: "Category",
          data: categoryFilterData,
          index: 0,
          filterParam: "category",
        });
        setShowSideFilter(true);
      },
    },
    {
      text: "Start Date",
      filterParam: "start_date",
      onClickHandler: () => {
        setFilterValue({
          title: "Start Date",
          index: 2,
          filterParam: "start_date",
        });
        setShowSideFilter(true);
      },
    },
    {
      text: "End Date",
      filterParam: "end_date",
      onClickHandler: () => {
        setFilterValue({
          title: "End Date",
          index: 1,
          filterParam: "end_date",
        });
        setShowSideFilter(true);
      },
    },
  ];

  const paginationHandler = async () => {
    setLoading(true);
    let res: any;
    if (isFiltering) {
      const params = getFilterParams(filterData);
      res = await filterCourses(size, page, params);
    } else {
      res = await getAllCourses(size, page);
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
          currentPage="Courses"
          previousPages={breadCrumbsData}
        />
        <NameTag name="Thiha Swan Htet" currentPage="Courses" />
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
            setIsFiltering,
            setData,
            setTotalPages,
            setPage,
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
          }}
        />
        {!isListView ? (
          <Box margin="auto" maxWidth="1200px" mt={2} mb={8}>
            <GridContainer
              showCategory
              data={data}
              type="course"
              loading={loading}
            />
            <Box px={12} my={2}>
              <Paginator
                {...{ page, setPage, totalPages, item: "item", size, setSize }}
              />
            </Box>
          </Box>
        ) : (
          <DataTable
            {...{ columns, data, page, setPage, totalPages, size, setSize }}
          />
        )}
      </Box>
    </Layout>
  );
};
// columns = { columns };
// data = { data };
// page = { page };
// setPage = { setPage };
// totalPages = { totalPages };

export async function getServerSideProps() {
  const courses = await getAllCourses(6, 1);
  const categories = await getAllCategories(-1, 1);
  return {
    props: {
      courses,
      categories,
    },
  };
}

export default Courses;
