import {
  Box,
  Typography,
  FormControl,
  Input,
  Select,
  MenuItem,
  SelectChangeEvent,
  styled,
  InputBase,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  CircularProgress,
  CircularProgressProps,
} from "@mui/material";
import { FunctionComponent, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AiFillCalendar } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { BiErrorCircle } from "react-icons/bi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { colors } from "../../../data/constant";
import InputLabel from "../../Input/InputLabel";
import PaginationButton from "../../Stepper/PaginationButton";
import SearchInstructorComponent from "../AssignInstructorForm/SearchInstructorComponent";
import AddLectureForm from "../AddLecture/AddLectureForm";
import SmallButton from "../../Button/SmallButton";
import CircularProgressComponent from "./CircularProgressComponent";
import AssignStaffCalendar from "./AssignStaffCalendar";

interface IProps {
  handleNext?: any;
  handleBack?: any;
}

const instructors: {
  prefix: string;
  name: string;
  email: string;
  isAvailable: boolean;
}[] = [
  {
    prefix: "T",
    name: "Thon Thon",
    email: "thon@teachersucenter.com",
    isAvailable: false,
  },
  {
    prefix: "T",
    name: "Thon Thon",
    email: "thon@teachersucenter.com",
    isAvailable: true,
  },
  {
    prefix: "T",
    name: "Thon SuHar",
    email: "thon@teachersucenter.com",
    isAvailable: true,
  },
  {
    prefix: "H",
    name: "Hsu Thar",
    email: "hsuthar@teachersucenter.com",
    isAvailable: true,
  },
  {
    prefix: "S",
    name: "Shoon",
    email: "shoon@teachersucenter.com",
    isAvailable: true,
  },
  {
    prefix: "T",
    name: "Thiha",
    email: "thiha@teachersucenter.com",
    isAvailable: true,
  },
  {
    prefix: "H",
    name: "Hein Htet",
    email: "heinhtet@teachersucenter.com",
    isAvailable: true,
  },
  {
    prefix: "M",
    name: "Min Khant",
    email: "minkhant@teachersucenter.com",
    isAvailable: true,
  },
];

const AssignStaffForm: FunctionComponent<IProps> = ({
  handleNext,
  handleBack,
}) => {
  const [searchText, setSearchText] = useState("");
  const [selectedRole, setSelectedRole] = useState("role");
  const [assignRole, setAssignRole] = useState(false);
  const [addStaff, setAddStaff] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [saveStatus, setSaveStatus] = useState(true);
  const [progress, setProgress] = useState(11);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedRole(event.target.value as string);
    setAssignRole(!assignRole);
  };

  const handleStatus = () => {
    if (searchText && assignRole) {
      setShowCalendar(!showCalendar);
    }
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const BootstrapInput = styled(InputBase)(() => ({
    "& .MuiInputBase-input": {
      paddingLeft: "16px",
    },
  }));

  return (
    <Box className="w-full flex flex-col flex-start">
      <Box
        className="flex flex-start border py-0 pl-10 pr-0 rounded-xl overflow-y-auto"
        height="77vh"
      >
        {!showCalendar ? (
          <Box className="w-full py-6">
            <Box className="flex items-center my-4">
              <Typography className="flex text-[#737373] font-semibold text-lg ">
                Main Lecturer Name : &nbsp; Tr. {instructors[0].name}
              </Typography>
              {!addStaff && (
                <Box
                  bgcolor={colors.primaryColors.lightblue.lightblue1}
                  className="ml-8 flex items-center justify-center cursor-pointer w-fit rounded-md py-2 px-3"
                  onClick={() => setAddStaff(!addStaff)}
                >
                  <FaPlus fontSize="14.5px" className="-ml-1 mr-2" />
                  <Typography className="text-sm">Add Staff</Typography>
                </Box>
              )}
            </Box>
            {!addStaff && (
              <Box
                className=" my-6 rounded-md p-8 px-0 mr-10"
                sx={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.09)" }}
              >
                <Typography color={colors.black.black1} className="text-center">
                  You haven&apos;t assigned any staff yet.
                </Typography>
              </Box>
            )}
            {!addStaff && (
              <Box
                className="flex justify-between items-center p-6 px-7 rounded-lg cursor-pointer mr-10"
                sx={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.09)" }}
              >
                <Box className="flex items-center">
                  <Box className="w-10 h-10 flex justify-center mr-2 items-center bg-[#FF7FEB] rounded-full">
                    <Typography className="text-white font-bold">
                      {instructors[3].prefix}
                    </Typography>
                  </Box>
                  <Typography className="text-[#737373]">
                    {instructors[3].name}
                  </Typography>
                </Box>
                <Box className="flex items-center">
                  <Typography className="text-[#737373] mr-3">
                    Role:{" "}
                  </Typography>
                  <Box className="px-2 py-1.5 bg-[#FF7B31] text-white">
                    <Typography className="text-sm">
                      Assistant teacher
                    </Typography>
                  </Box>
                </Box>
                <Box className="flex items-center">
                  <Typography className="text-[#9C9C9C] pr-4 border-r-2">
                    Total <span className="text-[#333333]">60</span> slots
                  </Typography>
                  <Typography className="text-[#9C9C9C] px-4 border-l">
                    <span className="text-[#3B8CF7]">7</span> selected
                  </Typography>
                  <CircularProgressComponent value={progress} />
                </Box>
                <Box className="flex items-center">
                  <SmallButton
                    text="Edit"
                    customWidth="3.2rem"
                    customHeight="2.2rem"
                    customMarginX="1.5rem"
                  />
                  <Box
                    className="text-[#FF5151] flex items-center pl-6 border-l-2"
                    onClick={handleClickOpen}
                  >
                    <RiDeleteBin6Fill fontSize="22px" />
                    <Typography className="ml-2">Remove</Typography>

                    {open && (
                      <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogContent>
                          <DialogContentText
                            id="alert-dialog-description"
                            className="flex items-center pt-2"
                          >
                            <RiDeleteBin6Fill
                              fontSize="22px"
                              className="mr-2 text-[#FF5151]"
                            />{" "}
                            <Typography>
                              Are you sure you want to remove this staff ?
                            </Typography>
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions className="pb-4">
                          <Button onClick={handleClose}>Disagree</Button>
                          <Button onClick={handleClose} autoFocus>
                            Agree
                          </Button>
                        </DialogActions>
                      </Dialog>
                    )}
                  </Box>
                </Box>
              </Box>
            )}
            {addStaff && (
              <FormControl
                variant="standard"
                className="flex flex-row w-[50rem] !justify-start mt-6"
              >
                <Input
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  sx={{ color: "black" }}
                  placeholder="Type a staff name here..."
                  className="w-[50rem]"
                />
                <IoIosCloseCircleOutline
                  color="black"
                  fontSize={30}
                  onClick={() => setSearchText("")}
                />
              </FormControl>
            )}
            {searchText && (
              <Box className="border my-8 p-4 rounded-md w-[50rem]">
                <Typography className="text-[#3B8CF7] p-4">
                  Suggested staff
                </Typography>
                <SearchInstructorComponent
                  datas={instructors}
                  searchWord={searchText}
                />
              </Box>
            )}
            {addStaff && (
              <Box mt={5} mb={4}>
                <InputLabel label="Assign Role" fontSize="17px" />
                <FormControl
                  sx={{
                    backgroundColor: colors.white.white2,
                    color: colors.black.black1,
                  }}
                  className="w-1/3 h-[55px] rounded-md mt-2"
                >
                  <Select
                    value={selectedRole}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                    className="w-[98%] h-[55px] text-[#737373]"
                  >
                    <MenuItem value="role" className="hidden">
                      Select role
                    </MenuItem>
                    <MenuItem value="main teacher">Main teacher</MenuItem>
                    <MenuItem value="assistant teacher">
                      Assistant teacher
                    </MenuItem>
                    <MenuItem value="course coodinator">
                      Course coordinator
                    </MenuItem>
                  </Select>
                </FormControl>
                <Box className="flex items-center">
                  <Box
                    className={`flex items-center cursor-pointer ${
                      searchText && assignRole ? "bg-[#3B8CF7]" : "bg-[#BBBBBB]"
                    } w-fit rounded-md p-2 my-8`}
                    onClick={handleStatus}
                  >
                    <AiFillCalendar fontSize="24px" className="mr-2" />
                    <Typography className="text-sm">
                      Assign in calendar
                    </Typography>
                  </Box>
                  {searchText && assignRole && (
                    <Typography className="flex text-sm ml-2 text-[#FF5151]">
                      <BiErrorCircle fontSize={20} /> &nbsp; You need to assign
                      in calendar.
                    </Typography>
                  )}
                </Box>
              </Box>
            )}
          </Box>
        ) : (
          <AssignStaffCalendar />
        )}
      </Box>
      <Box className="my-3 flex justify-end">
        <PaginationButton {...{ handleNext, handleBack }} />
      </Box>
    </Box>
  );
};

export default AssignStaffForm;
