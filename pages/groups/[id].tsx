import { FunctionComponent, useState } from "react";
import Link from "next/link";
import { Box, Button, Typography, Tab } from "@mui/material";
import { RiFilterFill } from "react-icons/ri";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { FaUserAlt, FaSitemap, FaPlus } from "react-icons/fa";
import InputLabel from "../../components/Input/InputLabel";
import DynamicInput from "../../components/Input/DynamicInput";
import DataTable from "../../components/DataTable";

import SearchInput from "../../components/SearchInput";
import MenuComponent from "../../components/MenuButton";
import Layout from "../../components/Layout";
import { navigation } from "../../data/navigationData";
import BreadcrumbsComponent from "../../components/Breadcrumbs";
import { colors } from "../../data/constant";
import SmallButton from "../../components/Button/SmallButton";
import AddMembers from "../../components/Department/AddData/add-member";
import AddMemberGroupScreen from "./schedule";

interface GroupDetailProps {}

const tabList = [
  {
    title: "Members",
  },
  {
    title: "Sub groups",
  },
];

const memberColumns = [
  { field: "date", headerName: "Date", width: 200 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "position", headerName: "Position", width: 200 },
  { field: "column1", headerName: "Column1", width: 200 },
  { field: "column2", headerName: "Column2", width: 200 },
];

const groupColumns = [
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
    name: "Mg Mg",
    position: "DevOps",
    column1: "lorem",
    column2: "lorem",
    column3: "lorem",
    column4: "lorem",
  },
  {
    id: 2,
    date: "01/02/2022",
    name: "Su Su",
    position: "Backend",
    column1: "lorem",
    column2: "lorem",
    column3: "lorem",
    column4: "lorem",
  },
  {
    id: 3,
    date: "01/02/2022",
    name: "Hla Hla",
    position: "Frontend",
    column1: "lorem",
    column2: "lorem",
    column3: "lorem",
    column4: "lorem",
  },
  {
    id: 4,
    date: "01/02/2022",
    name: "Mya Mya",
    position: "Cloud Engineer",
    column1: "lorem",
    column2: "lorem",
    column3: "lorem",
    column4: "lorem",
  },
  {
    id: 5,
    date: "01/02/2022",
    name: "Myo Myo",
    position: "Team Leader",
    column1: "lorem",
    column2: "lorem",
    column3: "lorem",
    column4: "lorem",
  },
  {
    id: 6,
    date: "01/02/2022",
    name: "Moe Moe",
    position: "DevOps",
    column1: "lorem",
    column2: "lorem",
    column3: "lorem",
    column4: "lorem",
  },
  {
    id: 7,
    date: "01/02/2022",
    name: "Mee Mee",
    position: "Moblie Dev",
    column1: "lorem",
    column2: "lorem",
    column3: "lorem",
    column4: "lorem",
  },
  {
    id: 8,
    date: "01/02/2022",
    name: "Aung Thu",
    position: "Software Engineer",
    column1: "lorem",
    column2: "lorem",
    column3: "lorem",
    column4: "lorem",
  },
  {
    id: 9,
    date: "01/02/2022",
    name: "Tun Tun",
    position: "Backend",
    column1: "lorem",
    column2: "lorem",
    column3: "lorem",
    column4: "lorem",
  },
  {
    id: 10,
    date: "01/02/2022",
    name: "Kyi Kyi",
    position: "Project Manger",
    column1: "lorem",
    column2: "lorem",
    column3: "lorem",
    column4: "lorem",
  },
];

const groupData = [
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

const GroupDetail: FunctionComponent<GroupDetailProps> = () => {
  const [tabValue, setTabValue] = useState("1");

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [choice, setChoice] = useState("member");
  const [data, setData] = useState<any>(memberData);
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
  const [groupsFilterData, setGroupsFilterData] = useState<any>("");

  const tabHandleChange = (event: any, newValue: string) => {
    setTabValue(newValue);
  };

  const [addMember, setAddMember] = useState(false);
  const [addGroup, setAddGroup] = useState(false);

  const filterOptions = [
    {
      text: "Parent Group",
      filterParam: "parent_id",
      data: groupsFilterData,
      onClickHandler: () => {
        setFilterValue({
          title: "Parent Department",
          data: groupsFilterData,
          index: 0,
          filterParam: "parent_id",
        });
        setShowSideFilter(true);
      },
    },
  ];

  const handleMemberClick = () => {
    setChoice("member");
    setData(memberData);
  };

  const handleDepartmentClick = () => {
    setChoice("group");
    setData(groupData);
  };

  const getBtnClasses = () => {
    const classes = "bg-[#F6F9FE] text-[#3B8CF7]";
    return classes;
  };

  return (
    <Layout allowToggle={false} hiddenFooter data={navigation} panel="panel2">
      {addMember || addGroup ? (
        <AddMemberGroupScreen addMember={addMember} addGroup={addGroup} />
      ) : (
        <Box className=" px-12  overflow-y-auto flex flex-col gap-4">
          <BreadcrumbsComponent
            currentPage="Tech Team Department"
            previousPages={breadCrumbsData}
          />
          <Box maxWidth="400px">
            <InputLabel label="Group name" />
            <DynamicInput value={name} setValue={setName} />
          </Box>
          <Box maxWidth="400px">
            <InputLabel label="Group code" />
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
                    text="Add member"
                    customHeight="40px"
                    onClickHandler={() => setAddMember(!addMember)}
                    icon={<FaPlus style={{ marginRight: "10px" }} />}
                  />
                </Box>
                <Box>
                  <DataTable
                    {...{
                      columns: memberColumns,
                      data,
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
                    text="Add existing group"
                    customHeight="40px"
                    onClickHandler={() => setAddGroup(!addGroup)}
                    icon={<FaPlus style={{ marginRight: "10px" }} />}
                  />
                </Box>
                <Box>
                  <DataTable
                    {...{
                      columns: groupColumns,
                      data,
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
      )}
    </Layout>
  );
};

export default GroupDetail;
