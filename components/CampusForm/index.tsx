import { useState, FunctionComponent } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import DynamicInput from '../Input/DynamicInput';
import InputLabel from '../Input/InputLabel'
import SelectInput from '../Input/SelectInput';
import NumberInput from '../Input/NumberInput'
import AMPMInput from "../Input/AMPMInput";
import TimeRangePicker from "../TimeRangePicker";
import { colors } from "../../data/constant";

interface CampusFormProps {
    
}
 
const CampusForm: FunctionComponent<CampusFormProps> = () => {
    const [name, setName] = useState<string>("")
    const [houseNo, setHouseNo] = useState<string>("")
    const [blockNo, setBlockNo] = useState<string>("")
    const [streetName, setStreetName] = useState<string>("")
    const [township, setTownShip] = useState<string>("")
    const [city, setCity] = useState<string>("")
    const [country, setCountry] = useState<string>("")
    const [postalCode, setPostalCode] = useState<string>("")
    const [startHour, setStartHour] = useState<number>(0)
    const [startMin, setStartMin] = useState<number>(0)
    const [endHour, setEndHour] = useState<number>(0)
    const [endMin, setEndMin] = useState<number>(0)
    

    return ( 
        <Box ml={2} className="flex flex-col gap-5">
            <Box>
                <InputLabel 
                label="Campus name"
                />
                <DynamicInput 
                value={name}
                setValue={setName}
                placeholder="Type campus name here..."
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
                <InputLabel 
                label="House number"
                />
                <DynamicInput 
                value={houseNo}
                setValue={setHouseNo}
                placeholder="Type number..."
                />
            </Box>
            <Box>
                <InputLabel 
                label="Block number"
                />
                <DynamicInput 
                value={blockNo}
                setValue={setBlockNo}
                placeholder="Type here"
                />
            </Box>
            <Box>
                <InputLabel 
                label="Street name"
                />
                <DynamicInput 
                value={streetName}
                setValue={setStreetName}
                placeholder="eg.Min Ye Kyaw Swar street"
                />
            </Box>
            <Box>
                <InputLabel 
                label="Township"
                />
                <DynamicInput 
                value={township}
                setValue={setTownShip}
                placeholder="eg.Insein"
                />
            </Box>
            <Box>
                <InputLabel 
                label="City"
                />
                <DynamicInput 
                value={city}
                setValue={setCity}
                placeholder="eg.Yangon"
                />
            </Box>
            <Box>
                <InputLabel 
                label="Country"
                />
                <SelectInput 
                value={country}
                setValue={setCountry}
                />
            </Box>
            <Box>
                <InputLabel 
                label="Postal code"
                />
                <DynamicInput 
                value={postalCode}
                setValue={setPostalCode}
                placeholder="eg.11011"
                />
            </Box>
        </Box>
     );
}
 
export default CampusForm;