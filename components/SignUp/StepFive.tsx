import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  styled,
  InputBase,
  SelectChangeEvent,
} from "@mui/material";
import Image from "next/image";
import { FunctionComponent, useState } from "react";
import DynamicInput from "../Input/DynamicInput";
import InputLabel from "../Input/InputLabel";

const StepFive: FunctionComponent = () => {
  const [bank, setBank] = useState("KBZ");
  const [name, setName] = useState("");
  const [bankAccNo, setBankAccNo] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setBank(event.target.value as string);
  };

  const BootstrapInput = styled(InputBase)(() => ({
    "& .MuiInputBase-input": {
      paddingLeft: "16px",
    },
  }));

  return (
    <Box className="h-screen flex items-center">
      <Box className="flex flex-col justify-center items-center bg-white w-1/2 px-24">
        <Typography className="text-2xl text-[#737373] font-semibold w-full mb-8">
          Provide your bank information...
        </Typography>
        <Box className="w-full flex flex-col border py-8 px-10 rounded-xl">
          <Box className="mb-6">
            <InputLabel label="Bank Type" />
            <FormControl
              sx={{
                border: "1px solid grey",
                height: "55px",
                borderRadius: "15px",
              }}
              className="w-full"
            >
              <Select
                value={bank}
                onChange={handleChange}
                input={<BootstrapInput />}
                sx={{
                  width: "98%",
                  height: "55px",
                  fontSize: "16px",
                }}
              >
                <MenuItem value="KBZ">KBZ</MenuItem>
                <MenuItem value="AYA">AYA</MenuItem>
                <MenuItem value="UAB">UAB</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box mb={3}>
            <InputLabel label="Bank Account Name" />
            <DynamicInput
              value={name}
              setValue={setName}
              placeholder="eg. Thiha Swan Htet"
              maxiWidth="500px"
            />
          </Box>
          <Box>
            <InputLabel label="Bank Account Number" />
            <DynamicInput
              value={bankAccNo}
              setValue={setBankAccNo}
              placeholder="xxxx-xxxx-xxxx-xxxx"
              maxiWidth="500px"
            />
          </Box>
        </Box>
      </Box>
      <Box className="flex justify-center items-center bg-[#F6F9FE] h-screen w-1/2">
        <Image src="/images/Step5.svg" height={500} width={500} />
      </Box>
    </Box>
  );
};

export default StepFive;
