import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '../Input/InputLabel'
import NumberInput from '../Input/NumberInput'
import AMPMInput from "../Input/AMPMInput";
import { colors } from "../../data/constant";

interface TimeRangePickerProps
 {
    startHour: number
    endHour:number
    startMin:number
    endMin:number
    setStartHour:any
    setEndHour:any
    setStartMin:any
    setEndMin:any
    labelText: string;
}
 
const TimeRangePicker: FunctionComponent<TimeRangePickerProps> = ({
    startHour,
    endHour,
    startMin,
    endMin,
    setStartHour,
    setEndHour,
    setStartMin,
    setEndMin,
    labelText,
}) => {
    return ( 
        <Box
            className="w-[350px] gap-3 flex flex-col"
            >
                <InputLabel 
                label={labelText}
                />
                {/* Time range Picker */}
                <Box
                className="flex items-center justify-between"
                color={colors.grey.grey1}
                >   
                    <Box
                    className="flex flex-col gap-2"
                    >
                        <InputLabel 
                        label="From"
                        fontSize="13px"
                        />
                        <Box
                        className="flex items-center justify-between gap-1"
                        >
                            <NumberInput 
                            value={startHour}
                            setValue={setStartHour}
                            />
                            <Typography>
                                :
                            </Typography>
                            <NumberInput 
                            value={startMin}
                            setValue={setStartMin}
                            />
                            <AMPMInput />
                        </Box>
                    </Box>
                    <Box
                    className="flex flex-col gap-2"
                    >
                        <InputLabel 
                        label="To"
                        fontSize="13px"
                        />
                        <Box
                        className="flex items-center justify-between gap-1"
                        >
                            <NumberInput 
                            value={endHour}
                            setValue={setEndHour}
                            />
                            <Typography>
                                :
                            </Typography>
                            <NumberInput 
                            value={endMin}
                            setValue={setEndMin}
                            />
                            <AMPMInput />
                        </Box>
                    </Box>
                </Box>
            </Box>
     );
}
 
export default TimeRangePicker;