import { FunctionComponent, useState, SyntheticEvent, ReactNode } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import dynamic from "next/dynamic";
import { GiGraduateCap } from "react-icons/gi";
import { AiFillCalendar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { navigation } from "../../data/navigationData";
import CourseDetailForm from "../../components/CourseDetailForm";
import StaffViewScreen from "../../components/CourseDetailForm/StaffViewScreen";
import StudentListScreen from "../../components/CourseDetailForm/StudentListScreen";
=======

const Layout = dynamic(import("../../components/Layout"), { ssr: false });
const BreadcrumbsComponent = dynamic(import("../../components/Breadcrumbs"), {
  ssr: false,
});
const CourseDetailForm = dynamic(import("../../components/CourseDetailForm"), {
  ssr: false,
});
>>>>>>> develop

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

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const CourseDetail: FunctionComponent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Layout allowToggle={false} hiddenFooter data={navigation}>
      <Box color="black" className="container" px={7}>
        <BreadcrumbsComponent
          currentPage="Tech Team Department"
          previousPages={breadCrumbsData}
        />
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              className="h-16"
            >
              <Tab
                icon={<GiGraduateCap className="text-2xl mr-2" />}
                label="Course Detail"
                className="capitalize flex flex-row items-center text-[0.96rem]"
                {...a11yProps(0)}
              />
              <Tab
                icon={<AiFillCalendar className="text-xl mr-2" />}
                label="Calendar"
                className="capitalize flex flex-row items-center mx-16 text-[0.96rem]"
                {...a11yProps(1)}
              />
              <Tab
                icon={<BsFillPersonFill className="text-2xl mr-2" />}
                label="Staff"
                className="capitalize flex flex-row items-center mr-16 text-[0.96rem]"
                {...a11yProps(2)}
              />
              <Tab
                icon={<FaUserGraduate className="text-lg mr-2" />}
                label="Student"
                className="capitalize flex flex-row items-center text-[0.96rem]"
                {...a11yProps(3)}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <CourseDetailForm />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            <StaffViewScreen />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <StudentListScreen />
          </TabPanel>
        </Box>
      </Box>
    </Layout>
  );
};

export default CourseDetail;
