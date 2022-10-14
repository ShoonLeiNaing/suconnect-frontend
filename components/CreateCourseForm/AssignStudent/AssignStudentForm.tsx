import { Box, Typography, Checkbox } from "@mui/material";
import Select, { NonceProvider, StylesConfig } from "react-select";
import { FunctionComponent, useState } from "react";
import PaginationButton from "../../Stepper/PaginationButton";

interface IProps {
  handleNext?: any;
  handleBack?: any;
}

const classes = [
  {
    value: "ielts batch-1",
    label: "IELTS Batch-1",
  },
  {
    value: "ielts + 4 skills",
    label: "IELTS + 4 Skills",
  },
  {
    value: "ielts batch-2",
    label: "IELTS Batch-3",
  },
  {
    value: "tofel preparation",
    label: "TOFEL Preparation",
  },
  {
    value: "general 4 skills",
    label: "General 4 Skills",
  },
];

const students = [
  {
    value: "thon thon",
    label: "Thon Thon",
  },
  {
    value: "thon suthar",
    label: "Thon SuThar",
  },
  {
    value: "hus thar",
    label: "Hsu Thar",
  },
  {
    value: "shoon",
    label: "Shoon",
  },
  {
    value: "thiha",
    label: "Thiha",
  },
  {
    value: "hein htet",
    label: "Hein Htet",
  },
  {
    value: "min khant",
    label: "Min Khant",
  },
  {
    value: "thon",
    label: "Thon",
  },
  {
    value: "su thar",
    label: "Su Thar",
  },
  {
    value: "hus hsu",
    label: "Hsu Hsu",
  },
  {
    value: "shoon lei",
    label: "Shoon Lei",
  },
  {
    value: "thiha swan",
    label: "Thiha Swan",
  },
  {
    value: "hein htet nyi",
    label: "Hein Htet Nyi",
  },
  {
    value: "min khant kyaw",
    label: "Min Khant Kyaw",
  },
];

const AssignStudentForm: FunctionComponent<IProps> = ({
  handleNext,
  handleBack,
}) => {
  const [status, setStatus] = useState(false);

  const colourStyles: StylesConfig = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      borderBottom: "2px solid #3B8CF7",
      borderTop: "0",
      borderLeft: "0",
      borderRight: "0",
    }),

    valueContainer: (styles) => ({
      ...styles,
      padding: "2px 5px",
    }),
    option: (styles) => {
      return {
        ...styles,
        color: "#737373",

        ":active": {
          ...styles[":active"],
          backgroundColor: "#F6F9FE;",
        },
      };
    },
    dropdownIndicator: (styles) => {
      return {
        ...styles,
        display: "none",
      };
    },

    indicatorSeparator: (styles) => {
      return {
        ...styles,
        display: "none",
      };
    },

    clearIndicator: () => {
      return {
        ":before": {
          cursor: "pointer",
          content: '"clear all"',
          color: "#FF5151",
          marginRight: "-7px",
        },
      };
    },

    multiValue: (styles) => {
      return {
        ...styles,
        backgroundColor: "#F6F9FE;",
        padding: "7px",
        borderRadius: "7px",
        margin: "10px 10px 5px 0",

        ":before": {
          backgroundColor: "#FF7FEB",
          borderRadius: 50,
          content: '"L"',
          display: "flex",
          justifyContent: "center",
          height: 25,
          width: 25,
        },
      };
    },

    multiValueLabel: (styles) => ({
      ...styles,
      color: "#3B8CF7",
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      color: "#71ADFB",
    }),
  };

  return (
    <Box className="w-full flex flex-col flex-start">
      <Box
        className="flex flex-start border py-0 pl-10 pr-0 rounded-xl overflow-y-auto"
        height="77vh"
      >
        <Box className="w-3/4">
          <Typography className="text-[#737373] font-semibold text-lg my-4 pt-6">
            Assign Students
          </Typography>
          <Select
            defaultValue={[students[2], students[3]]}
            isMulti
            name="colors"
            options={students}
            className="basic-multi-select"
            classNamePrefix="select"
            styles={colourStyles}
            placeholder="Type a student name here..."
          />
          <Box className="-ml-2 my-4">
            <Checkbox
              className="text-[#3B8CF7]"
              onClick={() => setStatus(!status)}
            />
            <Typography className="inline-block text-[0.9rem] text-[#737373]">
              Assign classes
            </Typography>
          </Box>
          {status && (
            <>
              <Typography className="text-[#737373] font-semibold text-lg my-4">
                Assign Classes
              </Typography>
              <Select
                defaultValue={[classes[2], classes[3]]}
                isMulti
                name="colors"
                options={classes}
                className="basic-multi-select"
                classNamePrefix="select"
                styles={colourStyles}
              />
            </>
          )}
        </Box>
      </Box>
      <Box className="my-3 flex justify-end">
        <PaginationButton {...{ handleNext, handleBack }} />
      </Box>
    </Box>
  );
};

export default AssignStudentForm;
