import { Box, Typography } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';


const AMPMInput = () => {
    const [meridiem, setMeridiem] = useState(true)

    const handleClick = () => {
        setMeridiem(!meridiem)
    }

    return ( 
        <Box
        className="w-10 flex items-center text-[#737373]"
        >
            <Typography>
                {meridiem? "AM": "PM"}
            </Typography>
            <Box>
                <KeyboardArrowUpIcon onClick={handleClick} />
                <KeyboardArrowDownIcon onClick={handleClick} />
            </Box>
        </Box>
    );
}
 
export default AMPMInput;