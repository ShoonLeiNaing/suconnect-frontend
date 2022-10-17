import { useState, FunctionComponent, ChangeEvent } from "react";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Input,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import InputLabel from "../Input/InputLabel";
import { colors } from "../../data/constant";
import CardStatus from "./CardStatus";
import DynamicInput from "../Input/DynamicInput";
import styles from "./banking.module.css";
import SmallButton from "../Button/SmallButton";
import OutlineWhiteButton from "../Button/OutlineWhiteButton";

interface IProps {
  values: any;
  edit: boolean;
  setEdit: any;
  setAdd: any;
  handleChange?: any;
  errors?: any;
  touched?: any;
  bgColor: string;
  isNew?: any;
  loading?: any;
  data?: any;
}

const BankingInfoEditCard: FunctionComponent<IProps> = ({
  values,
  edit,
  setEdit,
  handleChange,
  errors,
  touched,
  bgColor,
  setAdd,
  isNew,
  loading,
  data,
}) => {
  // const [bank, setBank] = useState(values.bank_type);
  // const [name, setName] = useState(values.owner_name);
  const [bankAccNo, setBankAccNo] = useState(values.number);

  const [cardTitle, setCardTitle] = useState(values.save_name);

  const updateTitle = (event: any) => {
    const titleData = event.target.value;
    setCardTitle(titleData);
    handleChange(titleData);
  };

  const formatNumber = (e: any) => {
    const inputValue = e.target.value.replace(/ /g, "");
    let inputNumbersOnly = inputValue.replace(/\D/g, "");

    if (inputNumbersOnly.length > 16) {
      inputNumbersOnly = inputNumbersOnly.substr(0, 16);
    }

    const splits = inputNumbersOnly.match(/.{1,4}/g);
    let spacedNumber = "";
    if (splits) {
      spacedNumber = splits.join(" ");
    }
    // handleChange();

    setBankAccNo(spacedNumber);
    handleChange(e);
  };

  // const selectBankType = (event: SelectChangeEvent) => {
  //   setBank(event.target.value as string);
  // };

  const BootstrapInput = styled(InputBase)(() => ({
    "& .MuiInputBase-input": {
      paddingLeft: "16px",
    },
  }));

  return (
    <Box>
      {setAdd && isNew && (
        <Box width="340px" className="rounded-xl shadow-lg mb-4 duration-300">
          <Box
            sx={{ backgroundColor: bgColor }}
            className="flex px-6 py-5 rounded-t-xl justify-between items-center text-white py-6"
          >
            <FormControl variant="standard">
              <Input
                id="save_name"
                name="save_name"
                className={styles.card_title}
                value={values.save_name}
                onChange={handleChange}
              />
            </FormControl>
          </Box>
          <Box className="bg-white p-4 mb-4 rounded-b-xl">
            <Box mb={3}>
              <InputLabel label="Bank Account Name" />
              <DynamicInput
                value={values.owner_name}
                onChangeHandler={handleChange}
                id="owner_name"
                name="owner_name"
              />
              {errors.owner_name && touched.owner_name && (
                <Typography className="error-message" position="absolute">
                  {errors.owner_name}
                </Typography>
              )}
            </Box>
            <Box mb={3}>
              <InputLabel label="Bank Type" />
              <FormControl
                sx={{
                  border: "1px solid grey",
                }}
                className={styles.form_control}
              >
                <Select
                  value={values.bank_type}
                  onChange={handleChange}
                  input={<BootstrapInput />}
                  className={styles.select_box}
                  id="bank_type"
                  name="bank_type"
                >
                  <MenuItem value="KBZ">KBZ</MenuItem>
                  <MenuItem value="AYA">AYA</MenuItem>
                  <MenuItem value="CB">CB</MenuItem>
                  <MenuItem value="UAB">UAB</MenuItem>
                </Select>
              </FormControl>
              {errors.bank_type && touched.bank_type && (
                <Typography className="error-message" position="absolute">
                  {errors.bank_type}
                </Typography>
              )}
            </Box>
            <Box mb={3}>
              <InputLabel label="Bank Account Number" />
              <input
                className={styles.edit_box}
                value={bankAccNo}
                onChange={formatNumber}
                id="number"
                name="number"
              />
              {errors.number && touched.number && (
                <Typography className="error-message" position="absolute">
                  {errors.number}
                </Typography>
              )}
            </Box>
            <Box className="flex items-center justify-end mt-4 mb-4 gap-4">
              {!edit && isNew && (
                <OutlineWhiteButton
                  text="Cancel"
                  customWidth="80px"
                  customHeight="38px"
                  onClickHandler={() => {
                    setEdit(!edit);
                    setAdd(false);
                  }}
                />
              )}
              <SmallButton
                text="Save"
                customHeight="40px"
                customFontSize="15px"
                type="submit"
                loading={loading}
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default BankingInfoEditCard;
