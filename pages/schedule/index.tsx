import Layout from "../../components/Layout";
import { Box } from "@mui/material";
import NameTag from "../../components/Profile/NameTag";
import { navigation } from "../../data/navigationData";
import BreadcrumbsComponent from "../../components/Breadcrumbs";
import SearchInput from "../../components/DateFilter/SearchInput";
import MenuComponent from "../../components/MenuButton";
import IconButton from "../../components/IconButton";
import { RiFilterFill } from "react-icons/ri";
import { FunctionComponent, useEffect, useState } from "react";
import { getAllEvents } from "../../api/events/list";
import EventSchedular from "../../components/EventSchedular";
import { getAllCourses } from "../../api/courses/list";
import { getAllClassifications } from "../../api/classifications/list";
import FilterSideBar from "../../components/FilterSideBar/FilterSideBar";
import FilterValueList from "../../components/FilterSideBar/FilterValueList";
import { getFilterParams } from "../../utils/common/getFilterParams";
import { filterEvents } from "../../api/events/filter";

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

interface IProps {
  events: any;
  courses: any;
  classifications: any;
}

const Schedules: FunctionComponent<IProps> = ({
  events,
  courses,
  classifications,
}) => {
  const [searchText, setSearchText] = useState<string>("");
  const [showSideFilter, setShowSideFilter] = useState<boolean>(false);
  const [data, setData] = useState(events?.data);
  const [filterData, setFilterData] = useState<any>({});
  const [isFiltering, setIsFiltering] = useState<boolean>(false);

  const [filterValue, setFilterValue] = useState<any>({
    filterTite: "",
    data: [],
    index: null,
    filterParam: "",
  });

  console.log({ courses, classifications });

  const filterOptions = [
    {
      text: "Courses",
      filterParam: "course",
      data: courses?.data,
      onClickHandler: () => {
        setFilterValue({
          title: "Courses",
          data: courses?.data,
          index: 0,
          filterParam: "course",
        });
        setShowSideFilter(true);
      },
    },
    {
      text: "Classifications",
      filterParam: "classification",
      data: classifications?.data,
      onClickHandler: () => {
        setFilterValue({
          title: "Classifications",
          data: classifications?.data,
          index: 1,
          filterParam: "classification",
        });
        setShowSideFilter(true);
      },
    },
  ];

  const filterConfirmHandler = async () => {
    setIsFiltering(true);
    setShowSideFilter(false);
    const params = getFilterParams(filterData);
    const res = await filterEvents(params);
    setData(res?.data);
  };

  const fetchAllEvents = async () => {
    const res = await getAllEvents(-1, 1);
    setData(res?.data);
  };

  useEffect(() => {
    fetchAllEvents();
  }, [isFiltering]);

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
          //   mb={2}
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
            setData,
            isCalendar: true,
            filterFunction: filterEvents,
          }}
        />
        <Box>
          <EventSchedular events={data} />
        </Box>
      </Box>
    </Layout>
  );
};

export async function getServerSideProps() {
  const events = await getAllEvents(-1, 1);
  const courses = await getAllCourses(-1, 1);
  const classifications = await getAllClassifications(-1, 1);
  return {
    props: {
      events,
      courses,
      classifications,
    },
  };
}

export default Schedules;
