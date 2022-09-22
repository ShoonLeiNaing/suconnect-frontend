import { FunctionComponent, useState } from 'react';
import Box from "@mui/material/Box";
import DynamicInput from "../Input/DynamicInput";
import InputLabel from "../Input/InputLabel";
import TimeRangePicker from "../TimeRangePicker";
import SelectInput from "../Input/SelectInput";

interface VenueFormProps {
    
}
 
const VenueForm: FunctionComponent<VenueFormProps> = () => {
    const types = ["IDK", "IDK2"]

    const [code, setCode] = useState<string>("")
    const [number, setNumber] = useState<string>("")
    const [order, setOrder] = useState<string>("")
    const [floor, setFloor] = useState<string>("")
    const [type, setType] = useState<string>("")
    const [startHour, setStartHour] = useState<number>(0);
    const [startMin, setStartMin] = useState<number>(0);
    const [endHour, setEndHour] = useState<number>(0);
    const [endMin, setEndMin] = useState<number>(0);

    return ( 
        <Box ml={2} className="flex flex-col gap-8">
            <Box>
                <InputLabel label="Venue code" />
                <DynamicInput
                value={code}
                setValue={setCode}
                placeholder="eg.L6A-IELTS"
                />
            </Box>
            <TimeRangePicker
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
                <SelectInput
                value={type}
                setValue={setType}
                options={types}
                />
            </Box>
        </Box>
     );
}
 
export default VenueForm;