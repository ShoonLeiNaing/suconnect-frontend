import { Box, Typography, Checkbox } from "@mui/material";
import Select, { NonceProvider, StylesConfig } from "react-select";
import { FunctionComponent, useState } from "react";
import Image from "next/image";
import SmallButton from "../../Button/SmallButton";

const departments = [
  {
    value: "strategic department",
    label: "Strategic Department",
  },
  {
    value: "public relation department",
    label: "Public Relation Department",
  },
  {
    value: "merchant department",
    label: "Merchant Department",
  },
];

const AddDepartments: FunctionComponent = () => {
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
          <Typography className="flex items-center text-[#737373] font-semibold text-lg mt-4 mb-8 pt-6">
            <Image src="/images/branch.svg" width="30px" height="30px" /> &nbsp;
            Add existing Department
          </Typography>
          <Select
            isMulti
            name="colors"
            options={departments}
            className="basic-multi-select"
            classNamePrefix="select"
            styles={colourStyles}
            placeholder="Type a department name here..."
          />
        </Box>
      </Box>
      <Box className="flex my-3 justify-end">
        <SmallButton text="Clear" bgColor="white" color="#737373" />
        <SmallButton text="Confirm" customMarginX="1rem" />
      </Box>
    </Box>
  );
};

export default AddDepartments;
