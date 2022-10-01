import { FunctionComponent, useState } from "react";
import Box from "@mui/material/Box";
import DynamicInput from "../Input/DynamicInput";
import InputLabel from "../Input/InputLabel";
import TimeRangePicker from "../TimeRangePicker";
import SelectInput from "../Input/SelectInput";
import PaginationButton from "../Stepper/PaginationButton";

interface IProps {
  handleNext?: any;
  handleBack?: any;
}

const VenueForm: FunctionComponent<IProps> = ({ handleNext, handleBack }) => {
  const types = ["venue 1", "venue 2"];
  const [type, setType] = useState<string>("Select Venue");
  const [code, setCode] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [order, setOrder] = useState<string>("");
  const [floor, setFloor] = useState<string>("");
  const [startHour, setStartHour] = useState<number>(0);
  const [startMin, setStartMin] = useState<number>(0);
  const [endHour, setEndHour] = useState<number>(0);
  const [endMin, setEndMin] = useState<number>(0);

  return (
    <>
      <Box
        className="mx-8 border py-6 px-8 rounded-xl overflow-y-auto"
        minHeight="77vh"
      >
        <Box className="flex flex-col gap-8" maxWidth="400px">
          <Box>
            <InputLabel label="Venue code" />
            <DynamicInput
              value={code}
              setValue={setCode}
              placeholder="eg.L6A-IELTS"
            />
          </Box>
          <TimeRangePicker
            labelText="Available hours"
            startHour={startHour}
            endHour={endHour}
            startMin={startMin}
            endMin={endMin}
            setStartHour={setStartHour}
            setEndHour={setEndHour}
            setStartMin={setStartMin}
            setEndMin={setEndMin}
          />
          <Box>
            <InputLabel label="Venue number" />
            <DynamicInput
              value={number}
              setValue={setNumber}
              placeholder="Type number..."
            />
          </Box>
          <Box>
            <InputLabel label="Venue order" />
            <DynamicInput
              value={order}
              setValue={setOrder}
              placeholder="Type number..."
            />
          </Box>
          <Box>
            <InputLabel label="Venue floor" />
            <DynamicInput
              value={floor}
              setValue={setFloor}
              placeholder="eg.3 floors"
            />
          </Box>
          <Box>
            <InputLabel label="Venue type" />
            <SelectInput value={type} setValue={setType} options={types} />
          </Box>
        </Box>
      </Box>
      <Box className="mx-8 my-3 flex justify-end">
        <PaginationButton
          {...{ handleNext, handleBack, nextBtnTitle: "Create" }}
        />
      </Box>
    </>
  );
};

export default VenueForm;
