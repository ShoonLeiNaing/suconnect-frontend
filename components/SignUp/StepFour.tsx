import {
  Box,
  Typography,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  styled,
  InputBase,
} from "@mui/material";
import Image from "next/image";
import { FunctionComponent, useState } from "react";
import DynamicInput from "../Input/DynamicInput";
import InputLabel from "../Input/InputLabel";

const StepFour: FunctionComponent = () => {
  const [mail, setMail] = useState("");
  const [country, setCountry] = useState("Myanmar");
  const handleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
  };

  const BootstrapInput = styled(InputBase)(() => ({
    "& .MuiInputBase-input": {
      paddingLeft: "16px",
    },
  }));

  return (
    <Box className="h-screen flex items-center">
      <Box className="flex justify-center items-center bg-[#F6F9FE] h-screen w-1/2">
        <Image src="/images/Step4.svg" height={500} width={500} />
      </Box>
      <Box className="flex flex-col justify-center items-center bg-white w-1/2 px-24">
        <Typography className="text-2xl text-[#737373] font-semibold w-full mb-8">
          Let&lsquo;s us know where you live...
        </Typography>
        <Box className="w-full flex flex-col border py-8 px-10 rounded-xl max-h-[24rem] overflow-y-auto">
          <Box className="mb-6">
            <InputLabel label="House number" />
            <DynamicInput
              value={mail}
              setValue={setMail}
              maxiWidth="500px"
              placeholder="Type number..."
            />
          </Box>
          <Box className="mb-6">
            <InputLabel label="Block number" />
            <DynamicInput
              value={mail}
              setValue={setMail}
              maxiWidth="500px"
              placeholder="Type here..."
            />
          </Box>
          <Box className="mb-6">
            <InputLabel label="Street name" />
            <DynamicInput
              value={mail}
              setValue={setMail}
              maxiWidth="500px"
              placeholder="eg. Min Ye Kyaw Swar Street"
            />
          </Box>
          <Box className="mb-6">
            <InputLabel label="Township" />
            <DynamicInput
              value={mail}
              setValue={setMail}
              maxiWidth="500px"
              placeholder="eg. Insein"
            />
          </Box>
          <Box className="mb-6">
            <InputLabel label="City" />
            <DynamicInput
              value={mail}
              setValue={setMail}
              maxiWidth="500px"
              placeholder="eg. Yangon"
            />
          </Box>
          <Box className="mb-6">
            <InputLabel label="Country" />
            <FormControl
              sx={{
                border: "1px solid grey",
                height: "55px",
                borderRadius: "15px",
              }}
              className="w-full"
            >
              <Select
                value={country}
                onChange={handleChange}
                input={<BootstrapInput />}
                sx={{
                  width: "98%",
                  height: "55px",
                  fontSize: "16px",
                }}
              >
                <MenuItem value="Myanmar">Myanmar</MenuItem>
                <MenuItem value="Thailand">Thailand</MenuItem>
                <MenuItem value="Singapore">Singapore</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <InputLabel label="Postal code" />
            <DynamicInput
              value={mail}
              setValue={setMail}
              maxiWidth="500px"
              placeholder="eg. 11361"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StepFour;
