import { useState, FunctionComponent } from "react";
import { Tab, Tabs, Avatar, Chip, Typography, Box } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import SmallButton from "../Button/SmallButton";
import PaginationButton from "../Stepper/PaginationButton";
import styles from "./announcement.module.css";
import SearchInput from "../HeroParallax/SearchInput";
import { byPosition, users } from "../../data/testData";
import { colors } from "../../data/constant";
import generateRandomColor from "../../utils/common/generateRandomColor";

interface IProps {
  handleNext?: any;
  handleBack?: any;
}

const usersTab = [
  {
    title: "Staffs",
  },
  {
    title: "Students",
  },
  {
    title: "Guardians",
  },
];

const collectionsTab = [
  {
    title: "Departments",
  },
  {
    title: "Groups",
  },
  {
    title: "Course",
  },
  {
    title: "Collection",
  },
];

const SelectAccountsForm: FunctionComponent<IProps> = ({
  handleNext,
  handleBack,
}) => {
  const [userValue, setUserValue] = useState("1");
  const [collectionValue, setCollectionValue] = useState("1");
  const [searchText, setSearchText] = useState<string>("");

  const userTabHandleChange = (event: any, newValue: string) => {
    setUserValue(newValue);
  };

  const collectionTabHandleChange = (event: any, newValue: string) => {
    setCollectionValue(newValue);
  };

  const removeAccountHandler = () => {};

  return (
    <>
      <Box
        className="mx-8 border py-6 px-8 rounded-xl"
        maxHeight="77vh"
        overflow="scroll"
      >
        <Box>
          <Box className="flex items-center justify-between">
            <Typography>Users</Typography>
            <Box>
              <SmallButton customHeight="40px" text="Select Users" />
            </Box>
          </Box>

          <Box className="my-4 border p-4 rounded-xl" height="35vh">
            <TabContext value={userValue}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={userTabHandleChange}
                  aria-label="lab API tabs example"
                >
                  {usersTab?.map((tab, index) => (
                    <Tab
                      key={tab.title}
                      className={styles.tab}
                      label={`${tab.title} (8/100)`}
                      value={(index + 1).toString()}
                    />
                  ))}
                </TabList>
              </Box>
              {usersTab?.map((tab, index) => (
                <TabPanel value={(index + 1).toString()} key={tab.title}>
                  <Box>
                    <SearchInput
                      placeholderText={`Search ${tab.title}`}
                      customWidth="350px"
                      customHeight="55px"
                      outline
                    />
                  </Box>
                </TabPanel>
              ))}
            </TabContext>
            <Box className="px-4 flex flex-wrap gap-4">
              {users?.map((user) => (
                <Chip
                  key={user}
                  onDelete={() => removeAccountHandler()}
                  size="medium"
                  sx={{
                    borderRadius: "8px",
                    paddingY: "20px",
                    paddingX: "3px",
                    fontSize: "14px",
                    color: colors.primaryColors.lightblue.lightblue1,
                    backgroundColor: colors.white.white2,
                  }}
                  avatar={
                    <Avatar
                      sx={{
                        backgroundColor: colors.secondaryColors.green.green1,
                      }}
                    >
                      {user[0]}
                    </Avatar>
                  }
                  label={user}
                />
              ))}
            </Box>
          </Box>
        </Box>
        <Box>
          <Box className="flex items-center justify-between">
            <Typography>Collection</Typography>
            <Box>
              <SmallButton customHeight="40px" text="Select Collections" />
            </Box>
          </Box>
          <Box className="my-4 border p-4 rounded-xl" height="35vh">
            <TabContext value={collectionValue}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={collectionTabHandleChange}
                  aria-label="lab API tabs example"
                >
                  {collectionsTab?.map((tab, index) => (
                    <Tab
                      key={tab.title}
                      className={styles.tab}
                      label={`${tab.title} (8/100)`}
                      value={(index + 1).toString()}
                    />
                  ))}
                </TabList>
              </Box>
              {collectionsTab?.map((tab, index) => (
                <TabPanel value={(index + 1).toString()} key={tab.title}>
                  <Box>
                    <SearchInput
                      placeholderText={`Search ${tab.title}`}
                      customWidth="350px"
                      customHeight="55px"
                      outline
                    />
                  </Box>
                </TabPanel>
              ))}
            </TabContext>
            <Box className="px-4 flex flex-wrap gap-4">
              {byPosition?.map((pos) => (
                <Chip
                  key={pos.value}
                  onDelete={() => removeAccountHandler()}
                  size="medium"
                  sx={{
                    borderRadius: "8px",
                    paddingY: "20px",
                    paddingX: "3px",
                    fontSize: "14px",
                    color: colors.primaryColors.lightblue.lightblue1,
                    backgroundColor: colors.white.white2,
                  }}
                  label={pos.value}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="mx-8 my-3 flex justify-end">
        <PaginationButton {...{ handleNext, showPrevious: true, handleBack }} />
      </Box>
    </>
  );
};

export default SelectAccountsForm;
