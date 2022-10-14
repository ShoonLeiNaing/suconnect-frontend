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
} from "@mui/material";
import InputLabel from "../Input/InputLabel";
import { colors } from "../../data/constant";
import CardStatus from "./CardStatus";
import DynamicInput from "../Input/DynamicInput";
import styles from "./banking.module.css";
import SmallButton from "../Button/SmallButton";

interface IProps {
  title: string;
  bgColor: string;
  edit?: boolean;
  setEdit?: any;
}

const BankingInfoEditCard: FunctionComponent<IProps> = ({
  title,
  bgColor,
  edit,
  setEdit,
}) => {
  const [bank, setBank] = useState("KBZ");
  const [name, setName] = useState("Thiha Swan Htet");
  const [bankAccNo, setBankAccNo] = useState("0000 0000 0000 0000");

  const [cardTitle, setCardTitle] = useState(title);

  const updateTitle = (event: any) => {
    setCardTitle(event.target.value);
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
    setBankAccNo(spacedNumber);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setBank(event.target.value as string);
  };

  const BootstrapInput = styled(InputBase)(() => ({
    "& .MuiInputBase-input": {
      paddingLeft: "16px",
    },
  }));

  return (
    <Box>
      <Box width="340px" className="rounded-xl shadow-lg mb-4 duration-300">
        <Box
          sx={{ backgroundColor: bgColor }}
          className="flex px-6 py-5 rounded-t-xl justify-between items-center text-white py-6"
        >
          <FormControl variant="standard">
            <Input
              className={styles.card_title}
              value={cardTitle}
              onChange={updateTitle}
            />
          </FormControl>
        </Box>
        <Box className="bg-white p-4 mb-4 rounded-b-xl">
          <Box mb={3}>
            <InputLabel label="Bank Account Name" />
            <DynamicInput value={name} setValue={setName} />
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
                value={bank}
                onChange={handleChange}
                input={<BootstrapInput />}
                className={styles.select_box}
              >
                <MenuItem value="KBZ">KBZ</MenuItem>
                <MenuItem value="AYA">AYA</MenuItem>
                <MenuItem value="UAB">UAB</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box mb={3}>
            <InputLabel label="Bank Account Number" />
            <input
              className={styles.edit_box}
              value={bankAccNo}
              onChange={formatNumber}
            />
          </Box>
          <Box className="flex items-center justify-end mt-4">
            <SmallButton
              text="Cancel"
              bgColor="white"
              customPaddingY="0.5rem"
              color={colors.black.black1}
              customFontSize="15px"
              onClickHandler={() => setEdit(!edit)}
            />
            <SmallButton
              text="Save"
              customHeight="40px"
              customFontSize="15px"
            />
          </Box>
        </Box>
      </Box>
      {/* <CardStatus createdTime="1/10/2022" updatedTime="2/10/2022" /> */}
    </Box>
  );
};

export default BankingInfoEditCard;
