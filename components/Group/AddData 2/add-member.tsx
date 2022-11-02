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
  Checkbox,
} from "@mui/material";
import { FunctionComponent, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { colors } from "../../../data/constant";
import InputLabel from "../../../components/Input/InputLabel";
import SearchInstructorComponent from "../../../components/CreateCourseForm/AssignInstructorForm/SearchInstructorComponent";
import SmallButton from "../../Button/SmallButton";

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

const AddMembers: FunctionComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedRole, setSelectedRole] = useState("role");
  const [status, setStatus] = useState(false);
  const [assignRole, setAssignRole] = useState(false);
  const [addStaff, setAddStaff] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [saveStatus, setSaveStatus] = useState(true);
  const [progress, setProgress] = useState(11);
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedRole(event.target.value as string);
    setAssignRole(!assignRole);
  };

  const BootstrapInput = styled(InputBase)(() => ({
    "& .MuiInputBase-input": {
      paddingLeft: "16px",
    },
  }));

  return (
    <Box className="w-full flex flex-col">
      <Box
        className="flex border py-0 pl-10 pr-0 rounded-xl overflow-y-auto"
        height="77vh"
      >
        <Box className="w-full py-6">
          <Box className="flex items-center my-4">
            <Typography className="flex items-center text-[#737373] font-semibold text-lg ">
              <BsFillPersonFill fontSize="30px" className="mr-2" /> Add members
            </Typography>
          </Box>
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
          <Box mt={5}>
            <InputLabel label="Assign position" fontSize="16px" />
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
                className="w-[98%] h-[55px] text-[#737373] text-[15px]"
              >
                <MenuItem value="role" className="hidden">
                  Select position
                </MenuItem>
                <MenuItem value="main teacher">Frontend Developer</MenuItem>
                <MenuItem value="assistant teacher">Backend Developer</MenuItem>
                <MenuItem value="course coodinator">UI/UX Designer</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box className="-ml-2 my-5">
            <Checkbox
              className="text-[#3B8CF7]"
              onClick={() => setStatus(!status)}
            />
            <Typography className="inline-block text-[0.9rem] text-[#737373] text-[16px]">
              Add group
            </Typography>
          </Box>
          {status && (
            <Box>
              <InputLabel label="Choose group" fontSize="16px" />
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
                  className="w-[98%] h-[55px] text-[#737373] text-[15px]"
                >
                  <MenuItem value="role" className="hidden">
                    Select group
                  </MenuItem>
                  <MenuItem value="main teacher">Frontend</MenuItem>
                  <MenuItem value="assistant teacher">
                    Backend
                  </MenuItem>
                  <MenuItem value="course coodinator">UI/UX</MenuItem>
                </Select>
              </FormControl>
            </Box>
          )}
        </Box>
      </Box>
      <Box className="flex my-3 justify-end">
        <SmallButton text="Clear" bgColor="white" color="#737373" />
        <SmallButton text="Confirm" customMarginX="1rem" />
      </Box>
    </Box>
  );
};

export default AddMembers;
