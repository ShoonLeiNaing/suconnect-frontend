import { Box, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RiFilterFill } from "react-icons/ri";
import InstructorComponent from "../CreateCourseForm/AssignInstructorForm/InstructorComponent";
import SearchInput from "../DateFilter/SearchInput";
import { byCategory, byDate, staffData } from "../../data/testData";
import MenuComponent from "../MenuButton";
import DropDown from "../DateFilter/DropDown";
import ChipComponent from "../ChipComponent";
import { colors } from "../../data/constant";
import ActionsMenu from "../DataTable/ActionsMenu";
import DataTable from "../DataTable";
import CardStatusComponent from "./components/CardStatusComponent";
import { generateColor } from "../../utils/common/generateColor";
import DialogComponent from "./components/DialogComponent";

const instructors = [
  {
    prefix: "T",
    name: "Thon Thon",
    email: "thon@teachersucenter.com",
  },
];

const StudentListScreen: FunctionComponent = () => {
  const [filterText, setFilterText] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");
  const [data, setData] = useState<any>(staffData);
  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(6);
  const [totalPages, setTotalPages] = useState<number>(30);
  const [addStudent, setAddStudent] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [saveValues, setSaveValues] = useState(false);

  const handleDelete = () => {};

  const [showSideFilter, setShowSideFilter] = useState<boolean>(false);
  const [filterValue, setFilterValue] = useState<any>({
    filterTite: "",
    data: [],
    index: null,
  });

  const filterOptions = [
    {
      text: "Bank Name",
      data: byCategory,
      onClickHandler: () => {
        setFilterValue({ title: "Bank Name", data: byCategory, index: 0 });
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

  const columns = [
    { field: "date", headerName: "Date", minWidth: 120 },
    { field: "name", headerName: "Name", minWidth: 100 },

    {
      field: "column1",
      headerName: "Column 1",
      minWidth: 90,
      filterable: false,
    },

    {
      field: "column1",
      headerName: "Column 1",
      minWidth: 170,
      filterable: false,
    },

    {
      field: "column2",
      headerName: "Column 2",
      minWidth: 170,
      filterable: false,
    },

    {
      field: "column3",
      headerName: "Column 3",
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
  ];

  return (
    <Box className="flex">
      {showPopUp && (
        <DialogComponent
          text="Add new count card"
          open={showPopUp}
          setOpen={setShowPopUp}
          status={saveValues}
          setStatus={setSaveValues}
        />
      )}
      <Box className="w-full flex flex-col">
        <Typography className="text-[#737373] font-semibold mt-2">
          Main Lecturer
        </Typography>
        <Box className="-ml-8 mt-1">
          <InstructorComponent datas={instructors} color="#FF7FEB" />
        </Box>
        <Box className="flex gap-x-4">
          <CardStatusComponent
            title="Students"
            total="20"
            bgColor={generateColor(data.length + 4)}
          />
          <CardStatusComponent
            title="Average Teacher"
            total="5"
            bgColor={generateColor(data.length + 1)}
          />
          {saveValues && (
            <CardStatusComponent
              title="Average Assistants"
              total="13"
              bgColor={generateColor(data.length + 8)}
            />
          )}
          <CardStatusComponent
            title="Add new"
            total="+"
            bgColor="#F6F9FE"
            textColor="#3B8CF7"
            onClickHandler={() => setShowPopUp(!showPopUp)}
          />
        </Box>
        <Box className="flex justify-between items-center sm:my-6">
          <Box display="flex" gap={2}>
            <SearchInput
              setFilterText={setFilterText}
              setSearchText={setSearchText}
            />

            <MenuComponent
              filterOptions={filterOptions}
              isIcon
              icon={<RiFilterFill />}
            />
          </Box>
          {/* <DropDown setFilterText={setFilterText} individual /> */}
        </Box>
        <Box className="flex justify-between mb-4">
          <Box className="flex items-center gap-x-4">
            {filterOptions.map((option) => (
              <ChipComponent
                key={option.text}
                label={`by ${option.text.toLowerCase()}`}
                handleDelete={handleDelete}
              />
            ))}

            <Typography
              color={colors.secondaryColors.red.red1}
              fontSize="14px"
              className="cursor"
            >
              Clear all
            </Typography>
          </Box>
          <Box
            className="flex items-center my-0 py-2 px-4 text-white cursor-pointer rounded-lg"
            bgcolor={colors.primaryColors.lightblue.lightblue1}
            onClick={() => setAddStudent(!addStudent)}
          >
            <FaPlus />{" "}
            <span className="ml-2" style={{ fontSize: "14px" }}>
              {" "}
              Add student{" "}
            </span>
          </Box>
        </Box>

        <DataTable
          {...{ columns, data, page, setPage, totalPages, size, setSize }}
        />
      </Box>
    </Box>
  );
};

export default StudentListScreen;
