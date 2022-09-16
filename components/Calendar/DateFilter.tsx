import { Box, TextField, Typography } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import { BiRefresh } from "react-icons/bi";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { AiOutlineSetting, AiOutlineQuestion } from "react-icons/ai";
import IconButton from "../../components/IconButton";
import { colors } from "../../data/constant";
import SelectBox from "./SelectBox";

const DateFilter = () => {
  const date = new Date();
  const fulldate = new Intl.DateTimeFormat("en-US").format(date);
  const [todayDate, setTodayDate] = useState<String | null>(fulldate);

  const resetDates = () => {
    setTodayDate(fulldate);
  };

  const getNewDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1 );
    const getDate = new Intl.DateTimeFormat("en-US").format(tomorrow);
    setTodayDate(getDate);
  }

  return (
    <Box className="flex justify-between items-center">
      <Box className="flex items-center" gap={2}>
        <Box
          p={1}
          borderRadius="8px"
          width="fit-content"
          bgcolor={colors.white.white2}
          height="fit-content"
          onClick={() => resetDates()}
        >
          <Typography
            className="cursor-pointer py-[0.15rem] px-3"
            color={colors.primaryColors.lightblue.lightblue1}
          >
            {" "}
            Today{" "}
          </Typography>
        </Box>
        <Box maxWidth="200px">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              // label="Start Date"
              value={todayDate}
              onChange={(newValue) => {
                setTodayDate(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  sx={{
                    "& .MuiInputBase-input": {
                      height: "10px",
                      color: colors.black.black1,
                    },
                  }}
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
        </Box>

        <Box onClick={() => getNewDate()} className="cursor-pointer">
          <IoIosArrowUp color={colors.black.black1} fontSize="25px" />
        </Box>

        <Box onClick={() => getNewDate()} className="cursor-pointer">
          <IoIosArrowDown color={colors.black.black1} fontSize="25px" />
        </Box>
      </Box>
      <Box className="flex items-center" gap={2}>
        <SelectBox />
        <IconButton
          onClickHandler={resetDates}
          icon={<AiOutlineSetting fontSize="26px" />}
        />
        <IconButton
          onClickHandler={resetDates}
          icon={<BiRefresh fontSize="30px" />}
        />
        <Box onClick={() => resetDates()} className="cursor-pointer">
          <AiOutlineQuestion
            color={colors.primaryColors.lightblue.lightblue1}
            fontSize="30px"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DateFilter;
