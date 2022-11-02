import { FunctionComponent, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Box, Typography, Tab } from "@mui/material";
import { RiFilterFill } from "react-icons/ri";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { FaUserAlt, FaPlus } from "react-icons/fa";
import { navigation } from "../../data/navigationData";

const Layout = dynamic(import("../../components/Layout"), { ssr: false });
const BreadcrumbsComponent = dynamic(import("../../components/Breadcrumbs"), {
  ssr: false,
});
const InputLabel = dynamic(import("../../components/Input/InputLabel"), {
  ssr: false,
});
const SearchInput = dynamic(import("../../components/DateFilter/SearchInput"), {
  ssr: false,
});
const DynamicInput = dynamic(import("../../components/Input/DynamicInput"), {
  ssr: false,
});
const SmallButton = dynamic(import("../../components/Button/SmallButton"), {
  ssr: false,
});
const DataTable = dynamic(import("../../components/DataTable"), {
  ssr: false,
});
const MenuComponent = dynamic(import("../../components/MenuButton"), {
  ssr: false,
});

interface DepartmentDetailProps {}

const tabList = [
  {
    title: "Courses",
  },
  {
    title: "Sub Courses",
  },
];

const memberColumns = [
  { field: "date", headerName: "Date", width: 200 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "position", headerName: "Position", width: 200 },
  { field: "column1", headerName: "Column1", width: 200 },
  { field: "column2", headerName: "Column2", width: 200 },
];

const departmentColumns = [
  { field: "date", headerName: "Date", width: 200 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "description", headerName: "Description", width: 200 },
  { field: "code", headerName: "Code", width: 200 },
  {
    field: "members",
    headerName: "Members",
    width: 200,
    renderCell: (cellValues: any) => {
      return (
        <Box className="flex items-center justify-center gap-2">
          <FaUserAlt />
          <Typography>{cellValues.value}</Typography>
        </Box>
      );
    },
  },
  {
    field: "detail",
    headerName: "",
    width: 200,
    renderCell: (cellValues: any) => {
      return (
        <Link href={cellValues.value || "/"}>
          <a className="text-[#3B8CF7]">View details</a>
        </Link>
      );
    },
  },
];

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

const memberData = [
  {
    id: 1,
    date: "01/02/2022",
    name: "Guru",
    position: "God's Father",
    column1: "lorem",
    column2: "lorem",
    column3: "lorem",
    column4: "lorem",
  },
  {
    id: 2,
    date: "01/02/2022",
    name: "Guru",
    position: "God's Father",
    column1: "lorem",
    column2: "lorem",
    column3: "lorem",
    column4: "lorem",
  },
  {
    id: 3,
    date: "01/02/2022",
    name: "Guru",
    position: "God's Father",
    column1: "lorem",
    column2: "lorem",
    column3: "lorem",
    column4: "lorem",
  },
  {
    id: 4,
    date: "01/02/2022",
    name: "Guru",
    position: "God's Father",
    column1: "lorem",
    column2: "lorem",
    column3: "lorem",
    column4: "lorem",
  },
  {
    id: 5,
    date: "01/02/2022",
    name: "Guru",
    position: "God's Father",
    column1: "lorem",
    column2: "lorem",
    column3: "lorem",
    column4: "lorem",
  },
  {
    id: 6,
    date: "01/02/2022",
    name: "Guru",
    position: "God's Father",
    column1: "lorem",
    column2: "lorem",
    column3: "lorem",
    column4: "lorem",
  },
  {
    id: 7,
    date: "01/02/2022",
    name: "Guru",
    position: "God's Father",
    column1: "lorem",
    column2: "lorem",
    column3: "lorem",
    column4: "lorem",
  },
  {
    id: 8,
    date: "01/02/2022",
    name: "Guru",
    position: "God's Father",
    column1: "lorem",
    column2: "lorem",
    column3: "lorem",
    column4: "lorem",
  },
  {
    id: 9,
    date: "01/02/2022",
    name: "Guru",
    position: "God's Father",
    column1: "lorem",
    column2: "lorem",
    column3: "lorem",
    column4: "lorem",
  },
  {
    id: 10,
    date: "01/02/2022",
    name: "Guru",
    position: "God's Father",
    column1: "lorem",
    column2: "lorem",
    column3: "lorem",
    column4: "lorem",
  },
];

const departmentData = [
  {
    id: 1,
    date: "01/02/2022",
    name: "Heaven",
    description: "very cool",
    code: "123",
    column2: "lorem",
    members: 3,
  },
  {
    id: 2,
    date: "01/02/2022",
    name: "Heaven",
    description: "very cool",
    code: "123",
    column2: "lorem",
    members: 4,
  },
  {
    id: 3,
    date: "01/02/2022",
    name: "Heaven",
    description: "very cool",
    code: "123",
    column2: "lorem",
    members: 3,
  },
  {
    id: 4,
    date: "01/02/2022",
    name: "Heaven",
    description: "very cool",
    code: "123",
    column2: "lorem",
    members: 5,
  },
  {
    id: 5,
    date: "01/02/2022",
    name: "Heaven",
    description: "very cool",
    code: "123",
    column2: "lorem",
    members: 6,
  },
  {
    id: 6,
    date: "01/02/2022",
    name: "Heaven",
    description: "very cool",
    code: "123",
    column2: "lorem",
    members: 4,
  },
  {
    id: 7,
    date: "01/02/2022",
    name: "Heaven",
    description: "very cool",
    code: "123",
    column2: "lorem",
    members: 6,
  },
  {
    id: 8,
    date: "01/02/2022",
    name: "Heaven",
    description: "very cool",
    code: "123",
    column2: "lorem",
    members: 7,
  },
  {
    id: 9,
    date: "01/02/2022",
    name: "Heaven",
    description: "very cool",
    code: "123",
    column2: "lorem",
    members: 4,
  },
  {
    id: 10,
    date: "01/02/2022",
    name: "Heaven",
    description: "very cool",
    code: "123",
    column2: "lorem",
    members: 3,
  },
];

const DepartmentDetail: FunctionComponent<DepartmentDetailProps> = () => {
  const [tabValue, setTabValue] = useState("1");

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [choice, setChoice] = useState("member");
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(6);
  const [totalPages, setTotalPages] = useState<number>(10);
  const [searchText, setSearchText] = useState<string>("");
  const [showSideFilter, setShowSideFilter] = useState<boolean>(false);
  const [isListView, setIsListView] = useState<boolean>(false);
  const [filterData, setFilterData] = useState<any>({});
  const [filterValue, setFilterValue] = useState<any>({
    filterTite: "",
    data: [],
    index: null,
    filterParam: "",
  });
  const [loading, setLoading] = useState(false);
  const [departmentsFilterData, setDepartmentsFilterData] = useState<any>("");

  const tabHandleChange = (event: any, newValue: string) => {
    setTabValue(newValue);
  };

  const filterOptions = [
    {
      text: "Parent Department",
      filterParam: "parent_id",
      data: departmentsFilterData,
      onClickHandler: () => {
        setFilterValue({
          title: "Parent Department",
          data: departmentsFilterData,
          index: 0,
          filterParam: "parent_id",
        });
        setShowSideFilter(true);
      },
    },
  ];

  return (
    <Layout allowToggle={false} hiddenFooter data={navigation} panel="panel2">
      <Box className=" px-12  overflow-y-auto flex flex-col gap-4">
        <BreadcrumbsComponent
          currentPage="Tech Team Course"
          previousPages={breadCrumbsData}
        />
        <Box maxWidth="400px">
          <InputLabel label="Course name" />
          <DynamicInput value={name} setValue={setName} />
        </Box>
        <Box maxWidth="400px">
          <InputLabel label="Course code" />
          <DynamicInput value={code} setValue={setCode} />
        </Box>
        <Box maxWidth="400px">
          <InputLabel label="Description" />
          <DynamicInput
            value={description}
            setValue={setDescription}
            // bgColor="#F6F9FE"
            customWidth="400px"
            isTextArea
          />
        </Box>

        <Box>
          <TabContext value={tabValue}>
            <Box
              marginTop="10px"
              sx={{ borderBottom: 1, borderColor: "divider" }}
            >
              <TabList
                onChange={tabHandleChange}
                aria-label="lab API tabs example"
              >
                {tabList?.map((tab, index) => (
                  <Tab
                    key={tab.title}
                    // className={styles.tab}
                    label={tab.title}
                    value={(index + 1).toString()}
                    sx={{
                      textTransform: "none",
                      fontSize: "16px",
                      paddingX: "50px",
                    }}
                  />
                ))}
              </TabList>
            </Box>
            <TabPanel value="1">
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box display="flex" gap={2} mb={2}>
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
              <Box className="flex justify-between items-center">
                <Box>
                  <p className="text-black">filter value list here</p>
                </Box>
                <SmallButton
                  text="Add Member"
                  customHeight="40px"
                  icon={<FaPlus style={{ marginRight: "10px" }} />}
                />
              </Box>
              <Box>
                <DataTable
                  {...{
                    columns: memberColumns,
                    data: memberData,
                    page,
                    setPage,
                    totalPages,
                    size,
                    setSize,
                  }}
                />
              </Box>
            </TabPanel>
            <TabPanel value="2">
              {" "}
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box display="flex" gap={2} mb={2}>
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
              <Box className="flex justify-between items-center">
                <Box>
                  <p className="text-black">filter value list here</p>
                </Box>
                <SmallButton
                  text="Add Sub Course"
                  customHeight="40px"
                  icon={<FaPlus style={{ marginRight: "10px" }} />}
                />
              </Box>
              <Box>
                <DataTable
                  {...{
                    columns: departmentColumns,
                    data: departmentData,
                    page,
                    setPage,
                    totalPages,
                    size,
                    setSize,
                  }}
                />
              </Box>
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Layout>
  );
};

export default DepartmentDetail;
