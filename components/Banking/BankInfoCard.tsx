import { useState, FunctionComponent } from "react";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import InputLabel from "../Input/InputLabel";
import { colors } from "../../data/constant";
import CardStatus from "./CardStatus";
import StaticInput from "../Input/StaticInput";
import styles from "./banking.module.css";
import BankingInfoEditCard from "./BankInfoEditCard";

interface IProps {
  title: string;
  bgColor: string;
}

const BankingInfoLockCard: FunctionComponent<IProps> = ({ title, bgColor }) => {
  const [bank, setBank] = useState("KBZ");
  const [edit, setEdit] = useState(false);

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
      {!edit && (
        <Box>
          <Box width="340px" className="rounded-xl shadow-lg mb-4">
            <Box
              sx={{ backgroundColor: bgColor }}
              className="flex p-6 rounded-t-xl justify-between items-center text-white py-6"
            >
              <Typography fontSize="19px" color={colors.black.black2}>
                {title}
              </Typography>
              <Box
                className="px-3 py-1 rounded-md text-sm cursor-pointer"
                sx={{
                  backgroundColor: colors.primaryColors.lightblue.lightblue1,
                  color: colors.white.white1,
                }}
                onClick={() => setEdit(!edit)}
              >
                Edit
              </Box>
            </Box>
            <Box className="bg-white p-4 mb-4 rounded-b-xl">
              <Box mb={3}>
                <InputLabel label="Bank Account Name" />
                <StaticInput isLocked value="Thiha Swan Htet" />
              </Box>
              <Box mb={3}>
                <InputLabel label="Bank Type" />
                <FormControl
                  disabled
                  sx={{
                    backgroundColor: colors.white.white2,
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
                <StaticInput isLocked value="0000 0000 0000 0000" />
              </Box>
            </Box>
          </Box>
          <CardStatus createdTime="1/10/2022" updatedTime="2/10/2022" />
        </Box>
      )}
      {edit && <BankingInfoEditCard title={title} bgColor={bgColor} />}
    </Box>
  );
};

export default BankingInfoLockCard;
