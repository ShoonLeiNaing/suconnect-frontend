import { useState, FunctionComponent } from "react";
import {
  Box,
  Typography,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import InputComponent from "../Input";
import InputLabel from "../Input/InputLabel";
import { colors } from "../../data/constant";
import CardStatus from "./CardStatus";

interface IProps {
  title: string;
  bgColor: string;
}

const BankingInfoCard: FunctionComponent<IProps> = ({ title, bgColor }) => {
  const [bank, setBank] = useState("KBZ");

  const handleChange = (event: SelectChangeEvent) => {
    setBank(event.target.value as string);
  };

  return (
    <Box>
      <Box width="340px" className="rounded-xl shadow-lg mb-4">
        <Box
          sx={{ backgroundColor: bgColor }}
          className="flex p-6 rounded-t-xl justify-between items-center text-white py-6"
        >
          <Typography fontSize="18px">{title}</Typography>
          <Box
            className="px-3 py-1 rounded-md text-sm cursor-pointer"
            sx={{
              backgroundColor: colors.primaryColors.lightblue.lightblue1,
              color: colors.white.white1,
            }}
          >
            Edit
          </Box>
        </Box>
        <Box className="bg-white p-4 mb-4 rounded-b-xl">
          <Box mb={3}>
            <InputLabel label="Bank Account Name" />
            <InputComponent isLocked value="Thiha Swan Htet" />
          </Box>
          <Box mb={3}>
            <InputLabel label="Bank Type" />
            <FormControl
              sx={{
                backgroundColor: colors.white.white2,
                width: "100%",
                height: "auto",
                border: "0px",
                borderRadius: "15px",
              }}
            >
              <Select
                value={bank}
                onChange={handleChange}
                sx={{ border: "0px" }}
              >
                <MenuItem sx={{ border: "0px" }} value="KBZ">
                  KBZ
                </MenuItem>
                <MenuItem value="AYA">AYA</MenuItem>
                <MenuItem value="UAB">UAB</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box mb={3}>
            <InputLabel label="Bank Account Number" />
            <InputComponent isLocked value="0000 0000 0000 0000" />
          </Box>
        </Box>
      </Box>
      <CardStatus createdTime="1/10/2022" updatedTime="2/10/2022" />
    </Box>
  );
};

export default BankingInfoCard;
