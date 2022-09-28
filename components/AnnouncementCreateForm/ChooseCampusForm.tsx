import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  styled,
} from "@mui/material";
import { useState, FunctionComponent } from "react";
import { colors } from "../../data/constant";
import InputLabel from "../Input/InputLabel";
import PaginationButton from "../Stepper/PaginationButton";

interface IProps {
  handleNext?: any;
  handleBack?: any;
  selectedValues: any;
  setSelectedValues: any;
}

const BootstrapFormLabel = styled(FormControlLabel)(() => ({
  "& .MuiTypography-root": {
    fontSize: "14px",
    color: colors.black.black2,
  },
}));

const options = ["Su Connect", "Microsoft Teams", "Viber", "Email"];

const ChooseCampusForm: FunctionComponent<IProps> = ({
  handleNext,
  handleBack,
  selectedValues,
  setSelectedValues,
}) => {
  const clickCheckboxHandler = (e: any) => {
    if (e.target.checked) {
      const temp = [...selectedValues, e.target.value];
      setSelectedValues(temp);
    } else {
      const temp = selectedValues?.filter((val: any) => e.target.value !== val);
      setSelectedValues(temp);
    }
  };

  console.log({ selectedValues });
  return (
    <>
      <Box
        className="mx-8 border py-6 px-8 rounded-xl"
        height="77vh"
        overflow="scroll"
      >
        <Box>
          <InputLabel label="Send announcement via" />
          <Box display="flex" gap={4} my={1} px={1}>
            {options?.map((item) => (
              <BootstrapFormLabel
                control={
                  <Checkbox
                    value={item}
                    onChange={clickCheckboxHandler}
                    checked={selectedValues?.some((val: any) => val === item)}
                  />
                }
                label={item}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <Box className="mx-8 my-3 flex justify-end">
        <PaginationButton
          {...{
            handleNext,
            showPrevious: true,
            handleBack,
            nextBtnTitle: "Create",
          }}
        />
      </Box>
    </>
  );
};

export default ChooseCampusForm;
